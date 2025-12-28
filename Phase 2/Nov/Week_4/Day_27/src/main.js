import express from 'express';
import connectDb from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
app.use(express.json());
connectDb();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.get('/', (req, res) => {
    res.send("Blog API Home Page - Server is Running");
});
app.use('/api/posts', blogRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is Running on localhost:${PORT}`);
})