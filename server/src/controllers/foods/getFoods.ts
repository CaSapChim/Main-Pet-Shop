import { Request, Response} from "express";
import { foodsModel } from "../../models/productsSchema";

// Get all foods
export const getProducts = async (req: Request, res: Response) => {
    try {
        const productsData = await foodsModel.find();
        res.status(200).json(productsData);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: "An error occur when trying to get products" });
    }
}

// Get foods base on type
export const getFoodOnType = async (req: Request, res: Response) => {
    class FoodForAnimal {
        public type: string;
        constructor(type: string) {
            this.type = type;
        }
    
        async getFood() {
            const data = await foodsModel.findOne({ type: this.type });
            return data;
        }
    }

    try {
        const { type } = req.params;
        new FoodForAnimal(type).getFood().then(data => {
            if (!data)
                return res.status(404).json({ message: "Not found type of foods" })    
            res.status(200).json(data);
        });
    } catch(err) {
        res.status(500).json({ error: "An error occur when trying to get foods base on type" });
        console.log(err);
    }
}