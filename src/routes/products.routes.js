import { Router } from "express";
import { getProductById, getProducts } from "../controllers/products.controller.js";


const productsRouter = Router();

productsRouter.get("/home", getProducts);
productsRouter.get("/products/:id", getProductById);


export default productsRouter;