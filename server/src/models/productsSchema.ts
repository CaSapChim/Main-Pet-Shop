import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    type: { type: String, require: true },
    name: { type: String, require: true },
    price: { type: Number, require: true },
    imageURL: { type: String, require: true },
    desc: { type: String, require: true },
    madeIn: { type: String, require: true },
    nutrition: { type: String, require: true },
    taste: { type: String, require: true }
}) 

const petSchema = new mongoose.Schema({
    type: { type: String, require: true },
    name: { type: String, require: true },
    price: { type: Number, require: true },
    weight: { type: Number, require: true },
    height: { type: Number, require: true },
    desc: { type: String, require: true },
})

export const foodsModel = mongoose.model("petFood", foodSchema);
export const petModel = mongoose.model("pet", petSchema);