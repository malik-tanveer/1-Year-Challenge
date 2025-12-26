import express from 'express';
import databaseConnect from './config/db.js';

const app = express();
const PORT = 3000;
app.use(express.json());
databaseConnect();

app.get('/', (req,res)=>{
    res.send('Home');
});


app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`)
});