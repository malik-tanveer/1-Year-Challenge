import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/api/users", userRoutes);

app.get('/', (req, res) => {
    res.send('Learning Today');
})

app.listen(PORT, () => {
    console.log(`Server is Running on localhost:${PORT}`);
})