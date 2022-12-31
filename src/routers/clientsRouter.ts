import { Router } from "express"
import clientsController from "../controllers/clientsController.js"
import utils from "../utils/index.js"

const clientsRouter= Router()

clientsRouter.post("/clients/register", utils.validateTokenAndGetAccount, clientsController.registerNewClient)

export default clientsRouter