import { Router } from "express"
import clientsController from "../controllers/clientsController.js"
import validateDataClient from "../middlewares/clientsMiddleware.js"
import utils from "../utils/index.js"

const clientsRouter= Router()

clientsRouter.post("/clients/register", validateDataClient, utils.validateTokenAndGetAccount, clientsController.registerNewClient)
clientsRouter.get("/clients", utils.validateTokenAndGetAccount, clientsController.getListClients)

export default clientsRouter