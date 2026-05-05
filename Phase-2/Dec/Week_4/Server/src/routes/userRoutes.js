import { Router } from "express";
import { register, login } from "../controller/userController.js";
import { authMiddleware } from "../middleware/userMiddleware.js";

const router = Router();

router.post('/signup', register);
router.post('/login', login);

router.get("/profile", authMiddleware, (req, res) => {
    res.json({ message: "welcome this is a User profile", user: req.user });
});

export default router;