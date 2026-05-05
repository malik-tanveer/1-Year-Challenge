import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB is Succefully Connect!");
    } catch (err) {
        res.status(400).json({ msg: "Server Error!" });
        console.log(err);
    }
}

export default connectDB;