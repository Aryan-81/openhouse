// import { Admin } from "../models/admin.model.js"; // Yet to create this model
import { School } from "../models/school.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    
        if(!token) {
            return res.status(401).json({ message: 'Unauthorized request' });
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    
        const user = await School.findById(decodedToken._id);

        if (!user) {
            return res.status(401).json({ message: 'Invalid access token' });
        }
    
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
});

export const verifyAdmin = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    
        if(!token) {
            return res.status(401).json({ message: 'Unauthorized request' });
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    
        const admin = await Admin.findById(decodedToken._id);

        if (!user) {
            return res.status(401).json({ message: 'Invalid access token' });
        }
    
        req.admin = admin;
        next();
    } catch (error) {
        next(error);
    }
});