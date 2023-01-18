import { NextFunction, Request, Response} from "express"
import { TnewProduct } from "../interfaces/index.js"
import authSchema from "../schemas/authSchema.js"

async function validateDataNewProduct(req: Request, res: Response, next: NextFunction){
    const data: TnewProduct = req.body
    await authSchema.schemaProducts.validateAsync(data)
    next()
}

export default validateDataNewProduct