import Blog from '../models/Blog.js';

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });

        res.status(200).json({
            message: "All blogs fetched successfully",
            count: blogs.length,
            blogs: blogs
        });

    } catch (err) {
        res.status(500).json({ message: "Error fetching blogs", error: err.message });
    }
};