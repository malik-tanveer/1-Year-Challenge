import express from 'express';
import protectedRoute from './routes/protectedRoute.js'
import connectDB from "./config/db.js"

const app = express();
const PORT = 3000;
app.use(express.json());
connectDB();

app.get('/', (req,res)=>{
    res.send('Home is a Start of site & sever page');
});

app.use('/api', protectedRoute)

app.listen(PORT, ()=>{
    console.log(`Server is Running on localhost:${PORT}`);

})