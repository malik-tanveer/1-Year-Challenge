import express from 'express';
import blogRoutes from './routes/blogRoutes.js';
import databaseConnect from './config/db.js';

const app = express();
const PORT = 3000;
databaseConnect();

app.use(express.json());
app.use('/api', blogRoutes);

app.listen(PORT, () => {
    console.log(`Seerver is running on localhost${PORT}`);
});