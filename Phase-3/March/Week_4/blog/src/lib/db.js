// Database Connection

import mongoose from "mongoose";

export const connectDB =  async () => {
    try {
        if(mongoose.connections[0].readyState) return;

        await mongoose.connect("mongodb://127.0.0.1:27017/Next-Blog")
        
        console.log("Database Connected Sucessfully");
        } catch(error){
            console.log("Database Connection Error",error);
        }
};