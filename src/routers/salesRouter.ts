import { Router } from "express"
import salesController from "../controllers/salesController.js"
import utils from "../utils/index.js"

const salesRouter = Router()

salesRouter.get("/sales", utils.validateTokenAndGetAccount, salesController.getLastSalesData)

export default salesRouter