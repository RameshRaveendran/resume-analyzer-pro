const Resume = require("../models/resume");
const Analysis = require("../models/analysisModel");
const extractSkills = require("../utils/skillExtractor");
const calculateScore = require("../utils/scoreCalculator");
const skillsDB = require("../utils/skillDatabase");

exports.analyzeResume = async (req, res) => {
  try {
    const resumeId = req.params.id;

    const resume = await Resume.findById(resumeId);

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }
          // console.log("RAW TEXT:", resume.rawText)

    const foundSkills = extractSkills(resume.rawText);

    const score = calculateScore(
      foundSkills,
      skillsDB.length,
      resume.rawText

    );

    const analysis = await Analysis.create({
      resume: resume._id,
      user: req.user.id,
      extractedSkills: foundSkills,
      score: score,
    });
    console.log("Analysis created:", analysis._id);

    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Analysis failed" });
  }
};