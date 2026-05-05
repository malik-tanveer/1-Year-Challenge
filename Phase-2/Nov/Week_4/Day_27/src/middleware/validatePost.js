
export const validatePost = (req, res, next) => {
    const { title, content } = req.body;


    if (!title || typeof title !== 'string' || title.trim().length < 3) {
        return res.status(400).json({
            message: "Title is required and must be at least 3 characters long"
        });
    }

    if (!content || typeof content !== 'string' || content.trim().length < 10) {
        return res.status(400).json({
            message: "Content is required and must be at least 10 characters long"
        });
    }
    next();
};