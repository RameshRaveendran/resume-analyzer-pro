const fs = require("fs");
const pdf = require("pdf-parse");

const parsePDF = async (filePath) => {
  try {
    const buffer = fs.readFileSync(filePath);

    if (!buffer || buffer.length === 0) {
      throw new Error("File is empty or not read properly");
    }

    const data = await pdf(buffer);
    return data.text;

  } catch (err) {
    console.error("PDF Parsing Error:", err.message);
    throw new Error("Invalid or corrupted PDF file");
  }
};

module.exports = parsePDF;