import { Router } from 'express';
import upload from '../middleware/upload.js';
import {
    getAllPosts,
    createPost,
    updatePost,
    deletePost
} from '../controllers/postController.js';
import { validatePost } from '../middleware/validatePost.js';
import { protect } from '../middleware/auth.js';

const router = Router();

router.get("/", getAllPosts);
router.post("/", protect, upload.single('image'),validatePost, createPost);
router.put('/:id', protect, upload.single('image'),validatePost, updatePost);
router.delete("/:id", protect, deletePost);


export default router;