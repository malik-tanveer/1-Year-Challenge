import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Day_27");
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err);
    }
}

export default connectDb;