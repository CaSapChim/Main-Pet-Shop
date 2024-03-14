import { Response, Request } from "express";
import { foodsModel } from "../../models/productsSchema";

interface Product {
    type: string;
    name: string;
    price: number;
    imageURL: string;
    desc: string;
    madeIn: string;
    nutrition: string;
    taste: string;
}

export const postProducts = async (req: Request, res: Response) => {
    const { type, name, price, imageURL, desc, madeIn, nutrition, taste } = req.body;
    const requireFields: (keyof Product)[] = ["type", "name", "price", "imageURL", "desc", "madeIn", "nutrition", "taste"];
    const missingFields = requireFields.filter(field => !req.body[field])

    if (missingFields.length > 0)
        return res.status(400).json({ error: 'Please fulfill and correct all information' });
    
    try {
        await foodsModel.create({
            type: type,
            name: name,
            price: price,
            imageURL: imageURL,
            desc: desc,
            madeIn: madeIn,
            nutrition: nutrition,
            taste: taste
        })
        res.status(201).json({ message: "Added succesfully" })
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: "Have an error when create new product" });
    }
}