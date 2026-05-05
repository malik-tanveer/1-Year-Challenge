import { Router } from "express";
import {  createBlog, 
  getAllBlogs, 
  updateBlog, 
  deleteBlog
 } from '../controllers/blogController.js'; 
import upload from '../middleware/upload.js';

const router = Router();

router.get('/get', getAllBlogs);
router.post('/post', upload.single('image'), createBlog);
router.put('/update/:id',upload.single('image'), updateBlog);
router.delete('/delete/:id', deleteBlog);

export default router;