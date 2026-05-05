import Blog from "../models/Blog.js";

export const createBlog = async (req, res) => {
  try {
    const image = req.file ? req.file.filename : null;

    const blog = new Blog({
      image
    });

    await blog.save();
    res.status(201).json({ message: "Blog created successfully", blog });
  } catch (error) {
    res.status(500).json({ message: "Error creating blog", error });
  }
};