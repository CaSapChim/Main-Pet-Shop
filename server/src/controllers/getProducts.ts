import { Request, Response} from "express";
import { productsModel } from "../models/productsSchema";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const productsData = await productsModel.find();
        res.status(200).json(productsData);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: "An error occur when trying to get products" });
    }
}