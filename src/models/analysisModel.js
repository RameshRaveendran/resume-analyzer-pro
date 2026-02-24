const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema(
  {
    resume: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    extractedSkills: [String],
    score: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Analysis", analysisSchema);