const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  userId: String,  
  name: String,
  email: String,
  phone: String,
  education: [
    {
      degree: String,
      field: String,
      institution: String,
      startYear: String,
      endYear: String
    }
  ],
  skills: [String],
  experience: [
    {
      role: String,
      company: String,
      duration: String,
      description: String
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Resume", resumeSchema);
