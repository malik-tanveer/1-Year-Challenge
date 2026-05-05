import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    image: {
        type: String,
        default: null,
    }
});

export default mongoose.model('Blog', blogSchema);