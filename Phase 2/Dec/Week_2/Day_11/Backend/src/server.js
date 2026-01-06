import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

dbConnect();

app.use("/api/items", itemRoutes);

app.get("/", (req, res) => {
  res.send("Home Page of Server");
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
