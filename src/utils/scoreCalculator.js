const calculateScore = (foundSkills, totalSkillCount, text) => {
  if (!text || typeof text !== "string") {
    console.log("Invalid text received:", text);
    return 0;
  }

  const words = text.split(/\s+/).filter(Boolean);

  const skillScore = (foundSkills.length / totalSkillCount) * 50;

  const keywordDensity =
    words.length > 0
      ? foundSkills.length / words.length
      : 0;

  const densityScore = Math.min(keywordDensity * 200, 30);

  const lengthScore =
    words.length > 300 && words.length < 1200
      ? 20
      : 10;

  const totalScore = skillScore + densityScore + lengthScore;

  return Math.round(totalScore);
};

module.exports = calculateScore;