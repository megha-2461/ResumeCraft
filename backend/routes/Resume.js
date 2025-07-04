const express = require("express");
const router = express.Router();
const Resume = require("../models/Resume");

router.post("/save", async (req, res) => {
    console.log("Received data:", req.body);
  try {
    const newResume = new Resume(req.body);
    const saved = await newResume.save();
     console.log("Resume saved:", saved);
    res.status(200).json(saved);
  } catch (err) {
    console.error("Failed to save resume:", err);
    res.status(500).json({ error: "Failed to save resume" });
  }
});

router.get("/all", async (req, res) => {
  try {
    const resumes = await Resume.find().sort({ createdAt: -1 });
    res.status(200).json(resumes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch resumes" });
  }
});

module.exports = router;
