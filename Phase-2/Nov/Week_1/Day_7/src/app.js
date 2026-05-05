import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use("/api/users", userRoutes);
app.use(errorHandler);


app.get('/', (req, res) => {
    res.send("Serve Home Page");
})

app.listen(PORT, () => {
    console.log(`Server is Runing on localhost:${PORT}`);

})