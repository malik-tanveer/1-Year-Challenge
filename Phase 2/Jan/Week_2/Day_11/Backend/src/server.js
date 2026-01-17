import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;
const Mongoose = process.env.MONGO_URI;

console.log(Mongoose);
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`Backend + MongoDB is running ${Mongoose}`);
  
});


app.listen(PORT, () => {
  console.log(`Server running on port localhost:${PORT}`);
});