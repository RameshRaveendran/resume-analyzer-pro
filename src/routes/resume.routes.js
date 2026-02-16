const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const resumeController = require("../controllers/resume.controller");
const protect = require("../middleware/auth.middleware");

router.post("/upload", protect, upload.single("resume"), resumeController.uploadResume);

module.exports = router;
