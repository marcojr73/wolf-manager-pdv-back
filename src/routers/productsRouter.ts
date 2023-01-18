import { Router } from "express"
import productsController from "../controllers/productsController.js"
import validateDataNewProduct from "../middlewares/productsMiddleware.js"
import utils from "../utils/index.js"

const productRouter= Router()

productRouter.post("/products/register", validateDataNewProduct, utils.validateTokenAndGetAccount, productsController.registerNewProduct )
productRouter.get("/products")

export default productRouter