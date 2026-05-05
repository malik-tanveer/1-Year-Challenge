import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { Router } from 'express';
import verifyToken from "../middleware/authMiddleware.js"

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

router.post('/login', async (req,res)=>{
    try { 
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error : "Invalid email"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({error : "Invalid password"});
        }

        const token = jwt.sign(
            {id : user._id},
            "mysecretkey",
            {expiresIn : "1h" }
        );

        res.json({
            message : "Login Succeful",
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server Error"});
    }
});


router.get('/profile',verifyToken, (req,res)=>{
    res.json({
        message : "Profile is protect Routes",
        userId: req.userId
    });
})


export default router;