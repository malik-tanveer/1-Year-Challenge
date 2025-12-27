import mongoose from 'mongoose';

const databaseConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Day_23");
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err);
    }
}

export default databaseConnect;