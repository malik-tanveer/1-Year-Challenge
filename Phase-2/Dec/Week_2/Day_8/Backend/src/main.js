import express from 'express';
import databaseConnect from './config/db.js'
import cors from 'cors';
import clientRoutes from './routes/clientRoutes.js';

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors()); 
databaseConnect();

app.get('/', (req,res)=>{
    res.send("Hello !");
})

app.use('/api', clientRoutes);


app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`);
});