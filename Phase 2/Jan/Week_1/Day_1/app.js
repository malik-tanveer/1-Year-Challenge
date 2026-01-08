import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from Express backend with .env!");
});
console.log(process.env.JWT_SECRET);

app.listen(PORT, () => {
  console.log(`Server running on port localhost:${PORT}`);
});
