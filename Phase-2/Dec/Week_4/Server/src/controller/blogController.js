import Blog from "../models/Blog.js";


export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error!" });
    }
}

export const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    const blog = new Blog({ title, content, author });

    await blog.save();

    return res.status(201).json({
      message: "Blog Created",
      blog
    });

  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Invalid data" });
  }
};

export const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!blog) {
            return res.status(404).json({ message: "Blog Not found!" });
        }
        res.status(200).json({ message: "blog Updated Success", blog });
    } catch (err) {
        res.status(400).json({ message: "Updated fail!" });
        console.log(err);
    }
}

export const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: "Blog Not found!" });
        }
        res.status(200).json({ message: "blog Deleted Success", blog });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Deleted Failed" });
    }
}