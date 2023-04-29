import { Router } from "express";
import productsRouter from "./products.routes.js";
import authRouter from "./auth.routes.js";

const router = Router();
router.use(authRouter);
router.use(productsRouter);



export default router;