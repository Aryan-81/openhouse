import express from "express";
import Event from "../models/Event";
import Registration from "../models/Registration"; // New model for registrations
import { verifyUser } from "../middleware/authMiddleware"; // Ensure user authentication

const router = express.Router();

// Register a user for an event
router.post("/:eventId/register", verifyUser, async (req, res) => {
  try {
    const { eventId } = req.params;
    const { collegeName, participantName, email } = req.body;

    // Ensure event exists
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // Create a new registration
    const registration = new Registration({
      eventId,
      collegeName,
      participantName,
      email,
      user: req.user.id, // Store user ID (if logged in)
    });

    await registration.save();
    res.status(201).json({ message: "Registered successfully", registration });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

export default router;
