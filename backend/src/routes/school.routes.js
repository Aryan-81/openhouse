import { Router } from "express";
import { initiateRegistration, login, logout, resendOTP, verifyOTPAndRegister } from "../controllers/school.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route('/initiate-registration').post(initiateRegistration);
router.route('/verfiy-and-register').post(verifyOTPAndRegister);

router.route('/login').post(login);
router.route('/logout').post(verifyJWT, logout);

router.route('/resend-otp').post(resendOTP);


export default router;