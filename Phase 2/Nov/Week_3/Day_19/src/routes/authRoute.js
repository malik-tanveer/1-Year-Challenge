import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

import protect from "../middleware/authMiddleware.js"
import { Router } from 'express'

const router = Router();

router.get('/profile', protect, (req, res) => {
    res.json({ message: "This is protected route" });
});


router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ error: "User already exists" });
        }


        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        res.status(201).json({
            message: "User created successfully",
            user: {
                id: user_id,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({ error: "Server Error" });
        console.log(error);
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            "SECRET_KEY",
            { expiresIn: "30d" }
        )
        res.json({ message: "Login successful", token });

    } catch (error) {
        res.status(500).json({ error: "Server error" });
        console.log(error);
    }
});


export default router;