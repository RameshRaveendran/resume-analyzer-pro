const skills = require("./skillDatabase");

const extractSkills = (text) => {
  if (!text) return [];

  const lowerText = text.toLowerCase();
  const foundSkills = [];

  skills.forEach((skill) => {
    if (lowerText.includes(skill.toLowerCase())) {
      foundSkills.push(skill);
    }
  });

  return foundSkills;
};

module.exports = extractSkills;