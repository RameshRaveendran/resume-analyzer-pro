const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

dotenv.config();
connectDB();

// local requires
const authRoutes = require("./routes/auth.routes");
const Resume = require("./models/resume");
const protect = require("./middleware/auth.middleware");
const resumeRoutes = require("./routes/resume.routes");
const Analysis = require("./models/analysisModel");

const app = express();


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());




// View Engine

app.set("view engine", "ejs");
app.set("views", "./src/views");

// routes 
app.use("/", authRoutes);
app.use("/", resumeRoutes);
app.use("/", require("./routes/analysisRoutes"));

// Test Route
app.get("/", (req, res) => {
  res.render("landing");
});
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.get("/dashboard", protect, async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user.id })
      .sort({ createdAt: -1 });

    const analyses = await Analysis.find({ user: req.user.id });

    const resumeWithAnalysis = resumes.map(resume => {
      const analysis = analyses.find(
        a => a.resume.toString() === resume._id.toString()
      );

      return {
        ...resume.toObject(),
        analysis: analysis || null,
      };
    });

    res.render("dashboard", { resumes: resumeWithAnalysis });

  } catch (error) {
    console.error(error);
    res.send("Dashboard error");
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
