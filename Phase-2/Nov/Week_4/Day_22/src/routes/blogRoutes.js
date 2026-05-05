import { Router } from "express";
import upload from '../middleware/upload.js';
import { createBlog } from '../controllers/blogController.js';

const router = Router();

router.post('/create', upload.single('image'), createBlog);

export default router;