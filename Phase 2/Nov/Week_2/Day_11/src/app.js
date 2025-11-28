import express from 'express';
import taskRoutes from "./routes/task.js";

const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use('/api', taskRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});