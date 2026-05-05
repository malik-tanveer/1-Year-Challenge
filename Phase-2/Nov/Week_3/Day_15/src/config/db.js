import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/Authdb');
        console.log('MonogDb Connected')
    } catch (error){
        console.log(error);
    }
}
export default connectDB;