import express from "express";
import taskRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json()); 

// Routes
app.use("/api/tasks", taskRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
