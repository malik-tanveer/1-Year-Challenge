import Post from '../models/Post.js';

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'name').sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error fetch the data", err });
    }
}

export const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : '';
        const post = new Post  ({
            title,
            content,
            image,
            author: req.user.id
        });
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error creating post", err });
    }
}

export const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        if (post.author.toString() !== req.user.id) {
            return res.status(401).json({ message: "Not Authorized" });
        }

        const { title, content } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : post.image;

        const updated = await Post.findByIdAndUpdate(
            req.params.id,
            { title, content, image },
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Message: "Server Error", err });
    }
}

export const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        if (post.author.toString() !== req.user.id) {
            return res.status(401).json({ message: "Not Authorized" });
        }

        // if (post.image) {
        //     const imagePath = `./uploads/${path.basename(post.image)}`;
        //     if (fs.existsSync(imagePath)) {
        //         fs.unlinkSync(imagePath);
        //     }
        // }
        await post.deleteOne();
        res.json({ message: 'Post deleted successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ err });
    }
}