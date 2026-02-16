const Resume = require("../models/Resume");

exports.uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.send("No file uploaded");
    }

    await Resume.create({
      user: req.user.id,
      fileName: req.file.filename,
      filePath: req.file.path,
    });

    res.redirect("/dashboard");
  } catch (error) {
    res.send("Upload failed");
  }
};
