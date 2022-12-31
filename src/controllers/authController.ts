import { Request, Response } from "express"
import { TsignIn, TsignUp } from "../interfaces"
import authService from "../services/authService.js"

async function signUp(req: Request, res: Response){
    const {email, businessName, cnpj, password}: TsignUp = req.body
    await authService.businessAlreadyExist(email, cnpj)
    const passCrypt = await authService.encryptPassword(password) 
    await authService.registerNewBusiness({email, businessName, cnpj, passCrypt})
    res.status(201).send("sign-up")
}

async function signIn(req: Request, res: Response){
    const {email, password} : TsignIn = req.body
    const passCrypt = await authService.isBusinessRegister(email)
    authService.verifyPasswordIsCorrect(password, passCrypt)
    res.status(201).send("sign-in")
}

export default {
    signUp,
    signIn
}