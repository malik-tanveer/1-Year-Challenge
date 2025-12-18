import authRoutes from './routes/authRoutes.js'
import connectdata from "./config/db.js";
import express from "express";


const app = express();
const PORT = 5000;
app.use(express.json());
connectdata();

app.get('/', (req, res)=>{
    res.send("Home Router / Routesz");
});

app.use('/api', authRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is Running on localhost:${PORT}`);
})