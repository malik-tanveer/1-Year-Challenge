import { Router } from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const router = Router();

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ Messgae: 'User Already Exists' });
        }

        user = new User({ name, email, password: await bcrypt.hash(password, 10) });
        await user.save();

        const token = jwt.sign({ user: { id: user._id } }, "MySecretKey", { expiresIn: '1h' });
        res.json({ token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Register Error try again", error });
    }
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { user: 
                { id: user._id } 
            }, "MySecretKey",
             { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Login is Error tyr again", error });
    }
})


export default router;