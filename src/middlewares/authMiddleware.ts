import { NextFunction, Request, Response} from "express"
import { TsignIn, TsignUp } from "../interfaces"
import authSchema from "../schemas/authSchema.js"

async function validateDataRegister(req: Request, res: Response, next: NextFunction){
    const data: TsignUp = req.body
    await authSchema.schemaSignUp.validateAsync(data)
    next()
}

async function validateDataLogIn(req: Request, res: Response, next: NextFunction){
    const data: TsignIn = req.body
    await authSchema.schemaSignIn.validateAsync(data)
    next()
}

export default {
    validateDataRegister,
    validateDataLogIn,
}