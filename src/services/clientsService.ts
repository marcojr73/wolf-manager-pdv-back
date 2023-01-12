import errors from "../errors/index.js"
import businessRepository from "../repositories/businessRepository.js"
import clientsRepository from "../repositories/clientsRepository.js"

async function isClientAlreadyRegister(data: {name: string, street: string, businessId: number}){
    const isClient = await clientsRepository.findClientByData(data)
    if(isClient) errors.conflict("Client already register")
}

async function newClient(name: string, street: string, number: number, phone: string, businessId: number) {
    await clientsRepository.newClientOfBusiness(name, street, number, phone, businessId)
}

async function getClientsAndBusinessName(businessId: number){
    const clients = await clientsRepository.getClientsByBusinessId(businessId)
    const businessName = await businessRepository.getBusinessNamesByBusinessId(businessId)
    return {
        businessName: businessName.businessName,
        clients: clients
    }
}

export default {
    isClientAlreadyRegister,
    newClient,
    getClientsAndBusinessName
}