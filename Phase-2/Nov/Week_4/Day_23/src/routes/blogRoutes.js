import { Router } from "express";
import upload from '../middleware/upload.js';
import { getAllBlogs } from '../controllers/blogingController.js';

const router = Router();

router.post('/create', upload.single('image'), getAllBlogs);

export default router;