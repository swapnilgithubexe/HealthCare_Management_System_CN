import mongoose from "mongoose";
import { validate } from "uuid";

const appointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: [true, "PatientId is required"]
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: [true, "DoctorId is required"]
  },
  date: {
    type: Date,
    required: [true, "Appointment date is required"],
    validate: {
      validator: function (value) {
        return value >= new date();
      },
      message: "Appointment date must be in the future"
    }
  },
  timeSlot: {
    type: String,
    required: [true, "Time slot is required"]
  },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled", "Completed"],
    default: "Pending"
  },
  reason: {
    type: String,
    required: [true, "Reason for appointment is required"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const appointmentModel = mongoose.model("Appointment", appointmentSchema);
export default appointmentModel;