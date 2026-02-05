import mongoose from "mongoose";

export const dbConnect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db connected")
        
    } catch (error) {
        console.error(error.message || "something wrong in connection")
    }
}