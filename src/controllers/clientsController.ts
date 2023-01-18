import { Request, Response } from "express"
import { TnewClient } from "../interfaces/index.js"
import clientsService from "../services/clientsService.js"

async function registerNewClient(req: Request, res: Response){
    const businessId: number = res.locals.businessId
    const {name, street, number, phone} : TnewClient = req.body
    await clientsService.isClientAlreadyRegister(name, street, number, businessId)
    await clientsService.newClient(name, street, number, phone, businessId)
    res.status(201).send("Created")
}

async function getListClients(req: Request, res: Response) {
    const businessId: number = res.locals.businessId
    const listClients = await clientsService.getClientsAndBusinessName(businessId)
    res.status(200).send(listClients)
}

export default {
    registerNewClient,
    getListClients
}