import express from "express";
import User from "./models/User.js";
import connectDB from "./config/db.js";

const app = express();
const PORT = 4000;
app.use(express.json());
connectDB();

app.post("/create", async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = new User({
            email,
            password
        });

        await user.save();
        res.send(user);
    } catch (error) {
        console.log(error);
    }

});

app.get('/create', async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        console.log(error);
    }
})


app.get('/', (req, res) => {
    res.send("Home page");
});

app.listen(PORT, () => {
    console.log(`Server is Runing on localhost:${PORT}`);
})