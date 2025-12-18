import { Router } from 'express';
import User from '../models/User.js';

const router = Router();

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // make Sure Duplicate email is cannnot accepted
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ error: "User already exists!" });
        }

        const user = new User({ name, email, password });
        await user.save();

        res.status(201).json({ message: "User Registered Successfully!" });
        console.log(user)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error" });
    }
});

router.get('/sign', async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        console.log(error);
    }
})

export default router;