import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/user", userRoute);

app.get("/", (req, res) => {
    res.send("Server is a Home page and You Move a /api/user");
});

app.listen(PORT, () => {
    console.log(`Server is Running on localhost:${PORT}`)
})