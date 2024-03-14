import express from "express";
import { getFoodOnType, getProducts } from "../controllers/foods/getFoods";
import { postProducts } from "../controllers/foods/postFoods";
import { getPets } from "../controllers/pets/getPets";
import { postPets } from "../controllers/pets/postPets";

const productsRouter = express.Router();

// Products
productsRouter.get("/foods", getProducts); // Get all foods
productsRouter.get("/food/:type", getFoodOnType);
productsRouter.post("/food/newproduct", postProducts);

// Pets
productsRouter.get("/pets", getPets); // Get all pets
productsRouter.post("/pet/newpet", postPets);

export default productsRouter;