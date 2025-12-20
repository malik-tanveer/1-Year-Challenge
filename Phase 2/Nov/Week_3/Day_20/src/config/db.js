import mongoose from 'mongoose';

const mongoDb = async () =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/Day_20");
        console.log("Database is Success Connected");
    } catch (error){
        console.log(error);
    }
}

export default mongoDb;