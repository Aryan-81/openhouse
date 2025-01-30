import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const schoolSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        contactPerson: {
            name: {
                type: String,
                required: true
            },
            designation: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true,
                unique: true
            },
            phone: {
                type: String,
                required: true,
                unique: true
            }
        },
        noOfStudents: {
            type: Number,
            required: true,
        },
        participatingEvents: [{
            event: {
                type: Schema.Types.ObjectId,
                ref: 'Event',
            },
            participants: [
                {
                    name: String,
                    grade: String,
                    age: Number,
                }
            ]
        }],
        refreshToken: {
            type: String,
            select: false
        },
    }, { timestamps: true }
);

// To hash the password before saving the user to the database
schoolSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    
    next();
});

// To compare the password entered by the user with the hashed password in the database
schoolSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// To generate an access token for the user
schoolSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            name: this.name,
            email: this.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
};

// To generate a refresh token for the user
schoolSchema.methods.generateRefreshToken = async function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );
};

export const School = mongoose.model('School', schoolSchema);