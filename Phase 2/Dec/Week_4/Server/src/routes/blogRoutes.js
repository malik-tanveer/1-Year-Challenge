import { Router } from "express";
import { getBlogs, createBlog, updateBlog, deleteBlog } from "../controller/blogController.js"
import { authMiddleware } from "../middleware/userMiddleware.js";

const router = Router();

router.get('/', getBlogs);
router.post('/',  createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);


export default router;