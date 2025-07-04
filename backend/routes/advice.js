const express = require("express");
const router = express.Router();
const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/", async (req, res) => {
  const resumeData = req.body;
  console.log("received resume data", resumeData);

  const prompt = `
You are an AI Career Advisor. Based on this resume data:

Name: ${resumeData.name}
Education: ${resumeData.education?.map(e => e.degree + " in " + e.field + " from " + e.institution).join(", ")}
Skills: ${resumeData.skills?.join(", ")}
Experience: ${resumeData.experience?.map(e => e.role + " at " + e.company).join(", ")}

Suggest:
1. Career paths
2. Skill improvements
3. Suitable industries
4. Online resources or courses
`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
    });

   const careerAdvice = response.choices[0].message.content;
    console.log("Career Advice Response:", careerAdvice);
    res.json({ careerAdvice });
  } catch (err) {
    console.error("OpenAI API error:", err.message);
    res.status(500).json({ error: "Failed to get advice", detail: err.message });
  }
});

module.exports = router;
