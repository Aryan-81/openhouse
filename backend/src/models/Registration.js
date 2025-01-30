import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  collegeName: { type: String, required: true },
  participantName: { type: String, required: true },
  email: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  registeredAt: { type: Date, default: Date.now },
});

export default mongoose.model("Registration", RegistrationSchema);
