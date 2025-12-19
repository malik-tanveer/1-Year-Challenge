import express from "express";
import connectDB from "./config/db.js"
import authRoute from './routes/authRoute.js'

const app = express();
const PORT = 3000;
app.use(express.json());
connectDB();

app.get('/', (req,res)=>{
    res.send("Home Page Welcome to my site & Server!");
});
app.use('/api', authRoute);


app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`);
})

