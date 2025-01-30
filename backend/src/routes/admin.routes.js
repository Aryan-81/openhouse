import express from "express";
import { verifyAdmin } from "../middlewares/auth.middleware.js"; // Ensure admin authentication
import { addEvent, deleteEvent, updateEvent } from "../controllers/admin.controller.js";

const router = express.Router();

// Create new event
router.post("/event", verifyAdmin, addEvent);

// Update event
router.put("/event/:id", verifyAdmin, updateEvent);

// Delete event
router.delete("/event/:id", verifyAdmin, deleteEvent);

export default router;
