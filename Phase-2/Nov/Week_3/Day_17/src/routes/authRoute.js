import User from '../models/User.js';
import {Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const router = Router();

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

export default router;