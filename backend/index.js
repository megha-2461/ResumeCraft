// index.js or server.js (backend root file)
const mongoose = require("mongoose");
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Route setup
const adviceRoute = require("./routes/advice");
app.use("/api/advice", adviceRoute);

const resumeRoutes = require("./routes/Resume");
app.use("/api/resume", resumeRoutes);

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);


// Server start
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
