import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import databaseConnect from './config/db.js';
import blogRoutes from './routes/blogRoutes.js';

const app = express();
const PORT = 3000;
app.use(express.json());
databaseConnect();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}


app.use('/uploads', express.static(uploadDir));
app.get('/', (req,res)=>{
    res.send('Home');
});
app.use('/api/blogs', blogRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`)
});