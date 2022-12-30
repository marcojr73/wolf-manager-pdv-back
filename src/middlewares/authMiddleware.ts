import { NextFunction, Request} from "express"
import { TsignIn, TsignUp } from "../interfaces"
import authSchema from "../schemas/authSchema"

async function validateDataRegister(next: NextFunction, req:Request){
    const data: TsignUp = req.body
    await authSchema.schemaSignUp.validateAsync(data)
    next()
}

async function validateDataLogIn(next: NextFunction, req:Request){
    const data: TsignIn = req.body
    await authSchema.schemaSignIn.validateAsync(data)
    next()
}

export default {
    validateDataRegister,
    validateDataLogIn,
}