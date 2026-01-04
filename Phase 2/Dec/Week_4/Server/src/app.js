import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());
dotenv.config();


app.get("/", (req,res)=>{
    res.send(`Server is runnign on`);
});


app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`);
    
})