import { Router } from 'express'
import productsRouter from './products.routes.js'
import authRouter from './auth.routes.js'

const router = Router()

router.use(productsRouter)
router.use(authRouter)

export default router
