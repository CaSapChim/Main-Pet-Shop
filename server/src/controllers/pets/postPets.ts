import { Request, Response } from "express";
import { petModel } from "../../models/productsSchema";

interface Product {
    type: string;
    name: string;
    price: number;
    imageUrl: string;
    weight: number;
    height: number;
    desc: string;
}

export const postPets = async (req: Request<{}, {}, Product>, res: Response) => {
    try {
        const { type, name, price, imageUrl, weight, height, desc } = req.body;
        const requireFields: (keyof Product)[] = ["type", "name", "price", "imageUrl", "weight", "height", "desc"];
        const missingFiedls = requireFields.filter(field => !req.body[field]);
        if (missingFiedls.length > 0)
            return res.status(400).json({ error: "Please fulfill and correct all information" });
        await petModel.create({
            type: type,
            name: name,
            price: price,
            imageUrl: imageUrl,
            weight: weight,
            height: height,
            desc: desc,
        })
        res.status(201).json({ message: "Added successfully" });
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: "An error occur when create new pet" });
    }
}