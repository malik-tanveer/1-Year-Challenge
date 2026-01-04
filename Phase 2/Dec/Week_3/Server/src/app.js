import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use('/api/auth', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is Running in localhost:${PORT}`);
})