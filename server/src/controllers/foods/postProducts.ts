import { Response, Request } from "express";
import { productsModel } from "../../models/productsSchema";

export const postProducts = async (req: Request, res: Response) => {
    const { name, price, imageURL, desc, madeIn, nutrition, taste } = req.body;

    if (!name || !price || !imageURL || !desc || !madeIn || !nutrition || !taste) {
        return res.status(400).json({ error: 'Please fulfill all information' });
    }
    
    try {
        await productsModel.create({
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