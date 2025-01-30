import express from "express";
import Event from "../models/Event";
import { verifyAdmin } from "../middleware/authMiddleware"; // Ensure admin authentication

const router = express.Router();

// Create new event
router.post("/event", verifyAdmin, async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json({ message: "Event created successfully", newEvent });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// Update event
router.put("/event/:id", verifyAdmin, async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ message: "Event updated", updatedEvent });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// Delete event
router.delete("/event/:id", verifyAdmin, async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Event deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

export default router;
