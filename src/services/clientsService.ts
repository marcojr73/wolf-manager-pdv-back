import errors from "../errors/index.js"
import clientsRepository from "../repositories/clientsRepository.js"

async function isClientAlreadyRegister(name: string, businessId: number){
    const isClient = await clientsRepository.findClientByName(name, businessId)
    if(isClient) errors.conflict("Client already register")
}

export default {
    isClientAlreadyRegister
}