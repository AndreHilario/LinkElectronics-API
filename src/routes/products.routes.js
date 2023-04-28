import { Router } from "express";
import { getProductById, getProducts, postProductDetails } from "../controllers/products.controller.js";
import { authValidation } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validateSchema.middlewares.js";
import { productDetailsSchema } from "../schemas/product.schema.js";


const productsRouter = Router();

productsRouter.use(authValidation);

productsRouter.post("/shopping", validateSchema(productDetailsSchema), postProductDetails);
productsRouter.get("/home", getProducts);
productsRouter.get("/products/:id", getProductById);


export default productsRouter;