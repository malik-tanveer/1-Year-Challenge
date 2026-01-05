import itemRoutes from "./routes/itemRoutes.js"
import dotenv from "dotenv";

import express from 'express';

dotenv.config();

const app = express();
const PORT = 3000;
app.use(express.json());
app.use("/api", itemRoutes);
app.get('/', (req,res)=>{
    res.send("Home Page of Server");
})

app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`);
})