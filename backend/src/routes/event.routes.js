import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { registerForEvent } from "../controllers/event.controller.js";

const router = express.Router();

// Register a user for an event
router.post("/:eventId/register", verifyJWT, registerForEvent);

export default router;
