const express = require("express");
const router = express.Router();
const { analyzeResume } = require("../controllers/analysisController");
const protect = require("../middleware/auth.middleware");

router.post("/analyze/:id", protect, analyzeResume);

module.exports = router;