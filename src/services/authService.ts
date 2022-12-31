import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"

import errors from "../errors/index.js"
import { Tbusiness } from "../interfaces/index.js"
import userRepository from "../repositories/userRepository.js"


async function businessAlreadyExist(email: string, cnpj: string){
    const emailInUse = await userRepository.findBusinessByEmail(email) 
    if(emailInUse) errors.conflict("This email already in use")
    const cnpjInUse = await userRepository.findBusinessByCnpj(cnpj) 
    if(cnpjInUse) errors.conflict("This cnpj already in use")
}

async function encryptPassword(password: string){
    return bcrypt.hashSync(password, 10)
}

async function registerNewBusiness(data: Tbusiness){
    await userRepository.registerBusiness(data)
}

async function isBusinessRegister(email: string){
    const business = await userRepository.findBusinessByEmail(email) 
    if(!business) errors.conflict("Not register business for this email")
    return business
}

function verifyPasswordIsCorrect(password: string, passCrypt: string){
    const ans = bcrypt.compareSync(password, passCrypt)
    if(!ans) throw errors.unprocessableEntity("This password is incorrect")
}

function generateToken(businessId: number){
    const {KEYJWT} = process.env
    return Jwt.sign({ businessId }, KEYJWT, { expiresIn: "1d"})
}

export default {
    businessAlreadyExist,
    encryptPassword,
    registerNewBusiness,
    isBusinessRegister,
    verifyPasswordIsCorrect,
    generateToken
}