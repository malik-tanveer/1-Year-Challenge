import cors from 'cors';
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authroutes.js";
import analyzeRoutes from "./routes/analyze.js";
import authMiddleware from "./middleware/authMiddleware.js";

dotenv.config();
connectDB();


const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

app.use("/api/analyze", analyzeRoutes);
app.use("/api/auth", authRoutes);

app.get('/', (req,res)=>{
  res.send("Home Page!");
})
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({ message: "Authorized", userId: req.user.id });
});


app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
