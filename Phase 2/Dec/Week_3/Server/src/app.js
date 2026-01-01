import connectDB from "./config/db.js";

import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
connectDB();

app.get('/', (req, res) => {
    res.send("Home Page!");
});

app.listen(PORT, () => {
    console.log(`Server is Running in localhost:${PORT}`);
})