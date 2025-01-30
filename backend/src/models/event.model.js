import mongoose, { mongo, Schema } from "mongoose";

const eventSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },

        // Timing details

        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        timeSlot: {
            startTime: String,
            endTime : String
        },

        // Location

        venue: {
            building: String,
            room: String,
            place: String, // In case if the event is not in any classroom
        },
        registrationDeadline: {
            type: Date,
            required: true
        }
    }, { timestamps: true }
);

export const Event = mongoose.model('Event', eventSchema);