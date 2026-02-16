const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

dotenv.config();
connectDB();

// local requires
const authRoutes = require("./routes/auth.routes");
const protect = require("./middleware/auth.middleware");
const resumeRoutes = require("./routes/resume.routes");

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


// Test Route
app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/dashboard", protect, (req, res) => {
  res.render("dashboard");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
