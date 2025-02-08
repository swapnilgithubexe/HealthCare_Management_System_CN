import mongoose from "mongoose";


const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/\S+@\S+\.\S+/, "Invalid email format"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [6, "Minimum 6 characters"]
  },
  specialization: {
    type: String,
    required: [true, "Specialization is required"],
    enum: ["GP", "Ortho", "Cardiologist", "Dermatologist", "Neurologist"]
  },
  experience: {
    type: Number,
    required: [true, "Experience is required"],
    min: [1, "Minimum 1 year of experience is required"]
  },
  contact: {
    type: String,
    required: [true, "Contact number is required"],
    match: [/^\d{10}$/, "Invalid contact number"]
  },
  availability: [{
    day: { type: String, required: true },
    timeSlot: { type: String, required: true }
  }],
  fees: {
    type: Number,
    required: [true, "Consultation is required"],
    min: [0, "Fees cannot be negative"]
  },
  ratings: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { Timestamp: true })

const doctorModel = mongoose.model("Doctor", doctorSchema);
export default doctorModel;