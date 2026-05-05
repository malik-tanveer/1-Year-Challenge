import express from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();
const app = express();

app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);

// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
