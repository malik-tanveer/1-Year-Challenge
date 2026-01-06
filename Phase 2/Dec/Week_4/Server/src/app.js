import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import mongoDb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

dotenv.config();
mongoDb();

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

app.use('/api/auth', userRoutes);
app.use('/api/blog', blogRoutes);

app.get("/", (req,res)=>{
    res.send(`Server is runnign on`);
});


app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`);
    
})