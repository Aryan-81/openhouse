import { Event } from "../models/event.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Create new Event
const addEvent = asyncHandler(async (req, res) => {
    const { name, description, startDate, endDate, timeSlot, venue, registrationDeadline } = req.body;

    if (!name || !description || !startDate || !endDate || !timeSlot || !venue || !registrationDeadline) {
        return res.status(404).json({ message: 'All fields are required' });
    }

    const newEvent = new Event(
        name,
        description,
        startDate,
        endDate,
        timeSlot,
        venue,
        registrationDeadline
    );

    await newEvent.save();

    return res.status(201).json({ message: "Event created successfully", newEvent });
});

// Update event
const updateEvent = asyncHandler(async (req, res) => {
    const updatedEvent = await Event.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    return res.status(200).json({ message: "Event updated", updatedEvent });
});

// Delete event
const deleteEvent = asyncHandler(async (req, res) => {
    await Event.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: "Event deleted" });
});

export {
    addEvent,
    updateEvent,
    deleteEvent
}