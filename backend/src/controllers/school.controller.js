import { asyncHandler } from '../utils/asyncHandler.js';
import { School } from '../models/school.model.js';
import { emailService } from '../utils/nodemailer.js';
import { OTPVerification } from "../models/OTPVerification.model.js";

// options for cookies
const cookieOptions = {
    httpOnly: true,
    secure: true
}

const generateOTP = async (email) => {
    const OTP = Math.floor(100000 + Math.random() * 900000);

    const existingRequest = await OTPVerification.findOne({ email });

    if(existingRequest) existingRequest.deleteOne();

    await OTPVerification.create({
        email,
        OTP,
        expiresAt: Date.now() + 5 * 60 * 1000 // OTP expires in 5 minutes
    });

    return OTP;
};

const generateAccessAndRefreshToken = async (schoolID) => {
    try {
        const school = await School.findById(schoolID);

        const accessToken = school.generateAccessToken();
        const refreshToken = school.generateRefreshToken();

        school.refreshToken = refreshToken;

        await school.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        return res.status(500).json({ message: 'Error while generating access and refresh tokens' });
    }
};

const initiateRegistration = asyncHandler(async (req, res) => {
    const { name, email, password, address, contactPerson, noOfStudents } = req.body;

    // Checks for the incoming data

    if(!name || !address || !email || !password || !noOfStudents || !contactPerson) {
        return res.status(404).json({ message: 'All fields are required' });
    }

    if(
        [name, address, email, password].some(field => {
            field.trim() === "";
        })
    ) {
        return res.status(404).json({ message: 'All fields are required' });
    }

    if(!email.includes('@')) {
        return res.status(400).json({ message: 'Email is invalid' });
    }

    const existingSchool = await School.findOne({ email });

    if(existingSchool) {
        return res.status(400).jso({ message: 'School already exists' });
    }

    // Send OTP for verification

    const OTP = await generateOTP(email);

    // send the otp via email

    try {
        await emailService.sendOTPEmail(email, OTP);
    } catch (error) {
        console.log('Failer to send OTP E:', error);
    }

    return res.status(200).json({ message: 'OTP sent successfully' });
});

const verifyOTPAndRegister = asyncHandler(async (req, res) => {
    const { name, email, password, address, contactPerson, noOfStudents, OTP } = req.body;

    // Checks for the incoming data (checking again just to avoid errors)

    if(!name || !address || !email || !password || !noOfStudents) {
        return res.status(404).json({ message: 'All fields are required' });
    }

    if(
        [name, address, email, password].some(field => {
            field.trim() === "";
        })
    ) {
        return res.status(404).json({ message: 'All fields are required' });
    }

    if(!email.includes('@')) {
        return res.status(400).json({ message: 'Email is invalid' });
    }

    // Verifying OTP
    const storedOTPVerificationInstance = await OTPVerification.findOne({ email });

    if(!storedOTPVerificationInstance) {
        return res.status(400).json({ message: 'OTP has not been requested or already verified' });
    }

    if(storedOTPVerificationInstance.expiresAt < Date.now()) {
        return res.status(400).json({ message: 'OTP is expired' });
    }

    if(!await storedOTPVerificationInstance.verifyOTP(OTP)) {
        return res.status(400).json({ message: 'Invalid OTP' });
    }

    await storedOTPVerificationInstance.deleteOne();

    // Now Register the School

    const school = await School.create({
        name,
        email,
        password,
        address,
        contactPerson,
        noOfStudents
    });

    if(!school) {
        return res.status(500).json({ message: 'Error occured while registering the School' });
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(school._id);

    school.refreshToken = refreshToken;
    await school.save({ validateBeforeSave: false });

    return res
    .status(200)
    .cookie('accessToken', accessToken, cookieOptions)
    .cookie('refreshToken', refreshToken, cookieOptions)
    .json({ message: 'School registered successfully', school, accessToken, refreshToken });
});

const login = asyncHandler(async(req, res) => {
    const { email, password } = req.body;

    if(!email || email.trim() === "" || !password || password.trim() === "") {
        return res.status(404).json({ message: 'All fields are required' });
    }

    const school = await School.findOne({ email });

    if(!school) {
        return res.status(404).json({ message: 'All fields are required' });
    }

    if(!await school.comparePassword(password)) {
        return res.status(401).json({ message: 'Password is invalid' });
    }

    const { accessToken, refreshToken } =  await generateAccessAndRefreshToken(school._id);

    const loggedInSchool = await School.findById(school._id).select("-password");

    return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json({
        message: 'Logged in successfully',
        loggedInSchool,
        accessToken,
        refreshToken
    });
});

const resendOTP = asyncHandler(async (req, res) => {
    const { email } = req.body;

    if(!email || email.trim() === "") {
        return res.status(404).json({ message: 'All fields are required' });
    }

    const existingRequest = await OTPVerification.findOne({ usersEmail: email });

    if(existingRequest) existingRequest.deleteOne();

    const OTP = await generateOTP(email);

    try {
        emailService.sendOTPEmail(email, OTP);
    } catch (error) {
        console.log('Failed to send OTP E:', error);
    }

    return res
    .status(200)
    .json({ message: 'OTP resent successfully' });
});

const logout = asyncHandler(async (req, res) => {
    await School.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        }
    )

    return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json({ message: 'Logged out successfully' });
});

export {
    initiateRegistration,
    verifyOTPAndRegister,
    login,
    resendOTP,
    logout
}