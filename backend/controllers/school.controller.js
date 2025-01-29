import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { School } from '../models/school.model.js';
import { emailService } from '../utils/nodemailer.js';
import { OTPVerification } from "../models/OTPVerification.model.js";
import { School } from "../models/school.model.js"

// options for cookies
const cookieOptions = {
    httpOnly: true,
    secure: true
}

const generateOTP = async (email) => {
    const OTP = Math.floor(100000 + Math.random() * 900000);

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
        throw new ApiError(500, "Error while generating access and refresh token");
    }
};

const initiateRegistration = asyncHandler(async (req, res) => {
    const { name, address, email, password, noOfStudents } = req.body;

    // Checks for the incoming data

    if(!name || !address || !email || !password || !noOfStudents) {
        throw new ApiError(404, 'All fields are required');
    }

    if(
        [name, address, email, password].some(field => {
            field.trim() === "";
        })
    ) {
        throw new ApiError(404, 'All fields are required');
    }

    if(!email.includes('@')) {
        throw new ApiError(400, 'Email is invalid');
    }

    const existingSchool = await School.findOne({ email });

    if(existingSchool) {
        throw new ApiError(400, 'School already exists');
    }

    // Send OTP for verification

    const OTP = await generateOTP(email);

    // send the otp via email

    try {
        await emailService.sendOTPEmail(email, OTP);
    } catch (error) {
        console.log('Failer to send OTP E:', error);
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, {}, 'OTP sent successfully')
    )
});

const verifyOTPAndRegister = asyncHandler(async (req, res) => {
    const { name, address, email, password, noOfStudents, OTP } = req.body;

    // Checks for the incoming data (checking again just to avoid errors)

    if(!name || !address || !email || !password || !noOfStudents) {
        throw new ApiError(404, 'All fields are required');
    }

    if(
        [name, address, email, password].some(field => {
            field.trim() === "";
        })
    ) {
        throw new ApiError(404, 'All fields are required');
    }

    if(!email.includes('@')) {
        throw new ApiError(400, 'Email is invalid');
    }

    // Verifying OTP
    const storedOTPVerificationInstance = await OTPVerification.findOne({ email });

    if(!storedOTPVerificationInstance) {
        throw new ApiError(400, 'OTP has not been requested or already verified');
    }

    if(storedOTPVerificationInstance.expiresAt < Date.now()) {
        throw new ApiError(400, 'OTP is expired');
    }

    if(!await storedOTPVerificationInstance.verifyOTP(OTP)) {
        throw new ApiError(400, "Invalid OTP");
    }

    storedOTPVerificationInstance.deleteOne();

    // Now Register the School

    const school = await School.create({
        name,
        email,
        password,
        address,
        noOfStudents
    });

    if(!school) {
        throw new ApiError(500, 'Error occured while registering the School');
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(school._id);

    school.refreshToken = refreshToken;
    school.save({ validateBeforeSave: false });

    return res
    .status(200)
    .cookie('accessToken', accessToken, cookieOptions)
    .cookie('refreshToken', refreshToken, cookieOptions)
    .json(
        new ApiResponse(
            200,
            {
                school,
                accessToken,
                refreshToken
            },
            'School registered successfully'
        )
    );
});

const login = asyncHandler(async(req, res) => {
    const { email, password } = req.body;

    if(!email || email.trim() === "" || !password || password.trim() === "") {
        throw new ApiError(404, 'All fields are required');
    }

    const school = await School.findOne({ email });

    if(!school) {
        throw new ApiError(404, 'School not found');
    }

    if(!await school.comparePassword(password)) {
        throw new ApiError(401, "Password is invalid");
    }

    const { accessToken, refreshToken } =  await generateAccessAndRefreshToken(school._id);

    const loggedInSchool = await School.findById(user._id).select("-password");

    return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
        new ApiResponse(
            200,
            {
                school: loggedInSchool,
                accessToken,
                refreshToken
            },
            "Logged in successfully"
        )
    );
});

const resendOTP = asyncHandler(async (req, res) => {
    const { email } = req.body;

    if(!email || email.trim() === "") {
        throw new ApiError(404, "All fields are required");
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
    .json(
        new ApiResponse(200, {}, "OTP resent successfully")
    )
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
    .json(
        new ApiResponse(200, {}, "Logged out Successfully")
    )
});

export {
    initiateRegistration,
    verifyOTPAndRegister,
    login,
    resendOTP,
    logout
}