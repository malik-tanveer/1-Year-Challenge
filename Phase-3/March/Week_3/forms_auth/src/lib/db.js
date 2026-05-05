import mongoose from "mongoose";

export const connectDB =  async () => {
    try {
        if(mongoose.connections[0].readyState) return;

        await mongoose.connect("mongodb://127.0.0.1:27017/nextjs-Auth")
        
        console.log("DB Connected");
        } catch(error){
            console.log("DB Error",error);
        }
};