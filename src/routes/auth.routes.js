import { Router } from 'express'
import { validateSchema } from '../middlewares/validateSchema.middlewares.js'
import { login, logout, singUp } from '../controllers/auth.controller.js'
import { loginSchema, userSchema } from '../schemas/auth.schemas.js'
import {
  authValidation,
  authValidationAdmin
} from '../middlewares/auth.middleware.js'
import {
  createNewProduct,
  loginAdmin
} from '../controllers/admin.controller.js'
import { newProductSchema } from '../schemas/product.schema.js'

const authRouter = Router()

authRouter.post('/sing-up', validateSchema(userSchema), singUp)
authRouter.post('/login', validateSchema(loginSchema), login)
authRouter.post('/logout', authValidation, logout)

authRouter.use(authValidationAdmin)
authRouter.post('/admin', loginAdmin)
authRouter.post(
  '/admin/new-product',
  validateSchema(newProductSchema),
  createNewProduct
)

export default authRouter
