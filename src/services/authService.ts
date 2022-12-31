import errors from "../errors/index.js"
import userRepository from "../repositories/userRepository.js"

async function businessAlreadyExist(email: string, cnpj: string){
    const emailInUse = await userRepository.findBusinessByEmail(email) 
    if(emailInUse) errors.conflict("This email already in use")
    const cnpjInUse = await userRepository.findBusinessByCnpj(cnpj) 
    if(cnpjInUse) errors.conflict("This cnpj already in use")
}

export default {
    businessAlreadyExist
}