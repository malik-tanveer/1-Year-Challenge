import express from 'express';
import connectDb from './config/db.js';


const app = express();
const PORT = 3000;
app.use(express.json());
connectDb();

app.get('/', (req,res)=>{
    res.send("Home Page");
});

app.listen(PORT, ()=>{
    console.log(`Server is Running on localhost:${PORT}`);
})