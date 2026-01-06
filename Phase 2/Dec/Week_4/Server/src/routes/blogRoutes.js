import { Router } from "express";
import { getBlogs, createBlog, updateBlog, deleteBlog } from "../controller/blogController.js"
import { authMiddleware } from "../middleware/userMiddleware.js";

const router = Router();

router.get('/', getBlogs);
router.post('/', authMiddleware, createBlog);
router.put("/:id", authMiddleware, updateBlog);
router.delete("/:id", authMiddleware, deleteBlog);


export default router;