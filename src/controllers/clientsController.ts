import { Request, Response } from "express"
import clientsService from "../services/clientsService.js"

async function registerNewClient(req: Request, res: Response){
    const businessId: number = res.locals.businessId
    const {name} : {name: string} = req.body
    await clientsService.isClientAlreadyRegister(name, businessId)
    console.log(businessId)
    await clientsService.newClient(name, businessId)
    res.status(201).send("created")
}

export default {
    registerNewClient
}