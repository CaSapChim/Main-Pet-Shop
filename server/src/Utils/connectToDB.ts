import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "src/config/.env" });

export async function connectToDB() {
    const mongoDB_Key = process.env.MONGO_URI;
    if (!mongoDB_Key) {
        console.log("Thiếu key mongo_uri");
        process.exit(1);
    }
    await mongoose.connect(mongoDB_Key);
    console.log("Đã kết nối tới database");
}