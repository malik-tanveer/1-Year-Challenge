import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());
app.get('/', (req,res) =>{
    res.send("Hello this is a Start of my Page Move on /api/users");
})
app.use("/api/users", userRoutes);

export default app;
