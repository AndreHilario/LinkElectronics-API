import { Router } from "express";
import { getProductById, getProducts, postProductDetails } from "../controllers/products.controller.js";
import { authValidation } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validateSchema.middlewares.js";
import { productDetailsSchema } from "../schemas/product.schema.js";


const productsRouter = Router();

productsRouter.get("/home", getProducts);
productsRouter.get("/products/:id", getProductById);
productsRouter.post("/shopping/:id", validateSchema(productDetailsSchema), postProductDetails);


export default productsRouter;