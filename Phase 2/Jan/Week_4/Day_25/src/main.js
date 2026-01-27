import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./route/userRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express Server is Running");
});

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
