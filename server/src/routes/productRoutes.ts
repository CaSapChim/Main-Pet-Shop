import express from "express";
import { getProducts } from "../controllers/foods/getProducts";
import { postProducts } from "../controllers/foods/postProducts";

const productsRouter = express.Router();

productsRouter.get("/food/products", getProducts);
productsRouter.post("/food/newproducts", postProducts);

export default productsRouter;