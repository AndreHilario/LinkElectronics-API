import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middlewares.js";
import { login, singUp } from "../controllers/auth.controller.js";
import { loginSchema, userSchema } from "../schemas/auth.schemas.js";



const authRouter = Router()

authRouter.post("/sing-up", validateSchema(userSchema), singUp)
authRouter.post("/login", validateSchema(loginSchema), login)
authRouter.post("/logout")

export default authRouter
    