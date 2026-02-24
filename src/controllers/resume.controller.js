const Resume = require("../models/resume");
const parsePDF = require("../utils/pdfParser");

exports.uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.send("No file uploaded");
    }

    const extractedText = await parsePDF(req.file.path);

    await Resume.create({
      user: req.user.id,
      fileName: req.file.filename,
      filePath: req.file.path,
      rawText: extractedText,
    });

    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.send("Upload failed");
  }
};
