import express from "express";
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'Express App' ;


console.log(process.env.PORT);
app.get('/', (req, res) => {
  res.send(`Welcome to ${APP_NAME} is a Dot env Day 6 topic`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});