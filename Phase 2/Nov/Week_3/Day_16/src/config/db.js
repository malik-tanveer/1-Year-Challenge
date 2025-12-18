import mongoose from "mongoose";

const connectdata = async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/Day_16');
        console.log("MongoDB Connect Successfully");
    } catch(error){
        console.log(error);
    }
}


export default connectdata;