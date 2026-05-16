import dotenv from "dotenv";
import cors from "cors";
import DBconnect from "./config/db.js"
import morgan from "morgan";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import express from "express";

// .ENV Keys
dotenv.config();  

// DB Connect
DBconnect();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use(errorMiddleware);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});