import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
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
    min: [6, "Minimum 6 characters for a password"]
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [0, "Age cannot be negative"]
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: ["Male", "Female", "Others"]
  },
  contact: {
    type: String,
    required: [true, "Contact is required"],
    match: [/^\d{10}$/, "Invalid contact number"]
  },
  medicalHistory: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "MedicalHistory"
  }],
  allergies: [{ type: String }],
  appointments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appointment"
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });


const patientModel = mongoose.model("Patient", patientSchema);
export default patientModel;