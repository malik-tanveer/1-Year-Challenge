import dotenv from "dotenv";
import cors from "cors";
import DBconnect from "./config/db.js"
import morgan from "morgan";
import productRoutes from "./routes/productRoutes.js";
import express from "express";

dotenv.config();        
DBconnect();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    message: "Backend Server Running",
  })
});

app.use("/api/products", productRoutes);
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
