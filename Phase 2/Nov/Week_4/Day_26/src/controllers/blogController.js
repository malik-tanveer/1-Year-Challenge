import Blog from '../models/Blog.js';


export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });

        res.status(201).json({
            message: "Blog successfully fecth!",
            blogs
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error creating blog", err });
    }
}

export const createBlog = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const image = req.file ? req.file.filename : null;

        if (!title || !content || !author) {
            return res.status(400).json({ message: "Title & Content & Author are required" });
        }

        const blog = new Blog({
            title,
            content,
            author,
            image
        });

        await blog.save();
        res.status(201).json({ message: "Blog created successfully", blog });
    } catch (error) {
        res.status(500).json({ message: "Error creating blog", error });
    }
};

export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, author } = req.body;
        const blog = await Blog.findById(id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        if (blog.author !== author) {
            return res.status(403).json({ message: "Only a Author can update this." });
        }

        if (title) blog.title = title;
        if (content) blog.content = content;

        if (req.file) {
            blog.image = req.file.filename;
        }

        await blog.save();

        res.status(200).json({
            message: "Blog successfully updated!",
            blog
        });

    } catch (error) {
        console.error("Update error:", error);
        res.status(500).json({ message: "Error updating blog", error: error.message });
    }
};

export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        // const { author } = req.body;

        const blog = await Blog.findById(id);

        // if (!blog) {
        //     return res.status(404).json({ message: "Blog not found" });
        // }

        // if (blog.author !== author) {
        //     return res.status(403).json({
            //     // message: "Only a Del Author "
        //     // });
        // }
        await Blog.findByIdAndDelete(id);

        res.json({
            message: "Blog successfully deleted!"
        });

    } catch (err) {
        console.error(err);
        res.json({ message: "Error deleting blog", error: err.message });
    }
};