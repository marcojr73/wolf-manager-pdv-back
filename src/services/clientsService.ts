import errors from "../errors/index.js"
import businessRepository from "../repositories/businessRepository.js"
import clientsRepository from "../repositories/clientsRepository.js"

async function isClientAlreadyRegister(name: string, street: string, number: string, businessId: number){
    const isClient = await clientsRepository.findClientByData(name, businessId, street, number)
    console.log(isClient)
    if(isClient) errors.conflict("Client already register")
}

async function newClient(name: string, street: string, number: string, phone: string, businessId: number) {
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