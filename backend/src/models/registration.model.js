import mongoose, { Schema } from "mongoose";

const registrationSchema = new Schema(
    {
        eventId: {
            type: Schema.Types.ObjectId,
            ref: 'Event',
            required: true
        },
        schoolId: {
            type: Schema.Types.ObjectId,
            ref: 'School',
            required: true
        },

        // Participant Details

        participants: [
            {
                name: {
                    type: String,
                    required: true,
                    trim: true
                },
                grade: {
                    type: String,
                    required: true
                },
                rollNumber: {
                    type: String,
                    required: true
                },
                age: {
                    type: Number,
                    required: true
                },
                emergencyContactNumber: {
                    type: String,
                }
            }
        ],

        teacherIncharge: {
            name: String,
            phone: String
        }
    }, { timestamps: true }
);

export const Registration = mongoose.model('Registration', registrationSchema);