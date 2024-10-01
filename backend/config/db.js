import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {

    try {
        const conn = await mongoose.connect(ENV_VARS.MONGO_URL)
        console.log("mongodb+srv://meetkanpariya00:Meet@123@cluster0.rsats.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    } catch (error) {
        process.exit(1); //1 means there was an error, 0 means success
        console.error("Error connecting to MongoDB: " + error.message)
    }
}