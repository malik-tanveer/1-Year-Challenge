import jwt from 'jsonwebtoken';
import User from '../model/User.js';
import bcrypt from 'bcryptjs';
import { Router } from 'express';
import authenticateToken from '../middleware/authMiddleware.js'

const router = Router();


router.get('/dashboard', authenticateToken,  (req,res)=>{
    res.json({
        message : "Welcome to dashboard",
        user : req.user
    });
});

router.post('/signup', async (req,res)=>{
try {
    const {name , email , password } = req.body;
    
    const userExist = await User.findOne({email});
    if (userExist) {
        return res.status(400).json({error : "User Already Exists"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        name,
        email,
        password : hashedPassword
    });
    res.status(201).json({
        message : "User Created Successfully",
        user : {
            id : user._id,
            email : user.email
        }
    });
} catch (error) {
    res.status(500).json({error : "Server error!"});
    console.log(error);
}
});

router.post('/login', async (req,res)=>{
    try {
        const {email , password} = req.body;

        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message : "Invalid Email" });
        }

        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch) {
            return res.status(400).json({message : "Invalid Password"});
        }

        const token = jwt.sign(
            {
                id : user._id,email : user.email
            },
            "SECRET_KEY",
            {expiresIn : "1h"}
        );
        res.json({message : "Login Successful", token});
    } catch (error) {
        res.status(500).json({error : "Server error !"})
        console.log(error);
    }
});

export default router;