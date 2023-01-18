import { NextFunction, Request, Response} from "express"
import errors from "../errors/index.js"
import { TnewProduct } from "../interfaces/index.js"
import authSchema from "../schemas/authSchema.js"

async function validateDataNewProduct(req: Request, res: Response, next: NextFunction){
    const data: TnewProduct = req.body
    const units = ["Caixa", "Par", "Unidade", "Grama", "Quilograma", "Litro", "Mililitro", "Metro", "Hora", "Minuto"]
    if(units.includes(data.unitMeasurement) === false) errors.unprocessableEntity("Units measurement invalid type")
    await authSchema.schemaProducts.validateAsync(data)
    next()
}

export default validateDataNewProduct