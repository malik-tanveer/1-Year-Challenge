import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        if (mongoose.connection.readyState >= 1) {
            return;
        }
        console.log("DB Connected ✅");
        await mongoose.connect("mongodb://127.0.0.1:27017/nextjs-app");
    } catch (error) {
        console.error("DB Error ❌", error);
    }
};