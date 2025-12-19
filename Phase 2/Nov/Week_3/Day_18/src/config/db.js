import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/Day_18');
        console.log("MongoDb is Succefully Connected");
    } catch (error){
        console.log(error);
    }
}

export default connectDB;