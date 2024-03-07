import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    type: { type: String, require: true },
    name: { type: String, require: true },
    price: { type: Number, require: true },
    imageURL: { type: String, require: true },
    desc: { type: String, require: true },
    madeIn: { type: String, require: true },
    nutrition: { type: String, require: true },
    taste: { type: String, require: true }
}) 

export const productsModel = mongoose.model("petFood", productsSchema);