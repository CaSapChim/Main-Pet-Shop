import { Request, Response } from "express";
import { petModel } from "../../models/productsSchema";

export const getPets = async (req: Request, res: Response) => {
    try {
        const petData = await petModel.find();
        res.status(200).json(petData);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: "An error occur when get all pets" });
    }
}