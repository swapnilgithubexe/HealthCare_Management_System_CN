import mongoose from "mongoose";

const medicalHistorySchema = new mongoose.Schema({
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
  diagnosis: {
    type: String,
    required: [true, "Diagnosis is required"]
  },
  medications: [{
    name: { type: String, required: true },
    dosage: { type: String, required: true }
  }],
  notes: {
    type: String
  },
  lastVisited: {
    type: Date,
    required: [true, "Last date of visit is required"]
  }
});

const medicalHistoryModel = mongoose.model("MedicalHistory", medicalHistorySchema);

export default medicalHistoryModel;