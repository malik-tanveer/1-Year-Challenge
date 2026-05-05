import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    username: String,
    name: String,
    bio: String,
    followerCount: Number,
    followingCount: Number,
    website: String,
    email: String,
    phone: String,
});

export default mongoose.model('Clinets', clientSchema);