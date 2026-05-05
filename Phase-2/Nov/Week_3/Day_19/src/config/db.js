import mongoose from 'mongoose';

const connectData = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Day_20");
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log(error)
    }
}


export default connectData;
