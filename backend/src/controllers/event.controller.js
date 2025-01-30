import { Registration } from "../models/registration.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerForEvent = asyncHandler(async (req, res) => {
    const { eventId } = req.params;
    const { schoolId, participants, teacherIncharge } = req.body;

    // Ensure event exists
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    // Create a new registration
    const registration = new Registration({
        eventId,
        schoolId,
        participants,
        teacherIncharge,
    });

    await registration.save();
    res.status(201).json({ message: "Registered successfully", registration });
});


export { registerForEvent }