import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { text } = req.body;

  if (!text || text.length < 5) {
    return res.status(400).json({ message: "Text is too short" });
  }

  // simple text analysis
  const words = text.trim().split(/\s+/);
  const wordCount = words.length;

  const preview = words.slice(0, 10).join(" "); // first 10 words

  res.json({
    message: "Text analyzed successfully",
    wordCount,
    preview,
  });
});

export default router;
