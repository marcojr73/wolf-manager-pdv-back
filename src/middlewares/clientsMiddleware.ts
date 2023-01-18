import { NextFunction, Request, Response} from "express"
import { TnewClient } from "../interfaces/index.js"
import authSchema from "../schemas/authSchema.js"

async function validateDataClient(req: Request, res: Response, next: NextFunction){
    const data: TnewClient = req.body
    await authSchema.schemaClients.validateAsync(data)
    next()
}

export default validateDataClient