import Blog from '../models/Blog.js';

export const getAllBlogs = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const image = req.file ? req.file.filename : null;

        const blog = new Blog({
            title,
            content,
            author,
            image
        })
        res.status(201).json({
            message: "Blog successfully created!",
            blog
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error creating blog", err });
    }
}