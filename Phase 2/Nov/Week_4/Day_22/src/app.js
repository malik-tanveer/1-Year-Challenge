import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cors from 'cors';
import connectDB from './config/db.js';
import blogRoutes from './routes/blogRoutes.js';

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
  console.log('uploads folder created');
}

app.use('/uploads', express.static(uploadDir));
connectDB();
app.use('/api', blogRoutes);

app.get('/', (req, res) => {
  res.send("Hello this is a MUlter adn Upload a image");
});


app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`)
});