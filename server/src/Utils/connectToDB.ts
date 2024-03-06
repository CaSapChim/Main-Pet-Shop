import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join("config", ".env") });

export async function connectToDB() {
    const mongoDB_Key = process.env.MONGO_URI;
    if (!mongoDB_Key) {
        console.log("Thiếu key mongo_uri");
        process.exit(1);
    }
    await mongoose.connect(mongoDB_Key);
    console.log("Đã kết nối tới database");
}