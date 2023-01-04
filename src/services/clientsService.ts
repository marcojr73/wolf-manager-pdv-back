import errors from "../errors/index.js"
import clientsRepository from "../repositories/clientsRepository.js"

async function isClientAlreadyRegister(name: string, businessId: number){
    const isClient = await clientsRepository.findClientByName(name, businessId)
    if(isClient) errors.conflict("Client already register")
}

async function newClient(name: string, businessId: number) {
    await clientsRepository.newClientOfBusiness(name, businessId)
}

async function getClients(businessId: number){
    return clientsRepository.getClientsByBusinessId(businessId)
}

export default {
    isClientAlreadyRegister,
    newClient,
    getClients
}