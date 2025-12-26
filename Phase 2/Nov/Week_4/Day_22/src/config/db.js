import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Day_22");
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err);
    }
}

export default connectDB;