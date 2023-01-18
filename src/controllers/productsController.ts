import { Request, Response } from "express"
import { TnewProduct } from "../interfaces/index.js"
import productsService from "../services/productsService.js"

async function registerNewProduct(req: Request, res: Response){
    const businessId: number = res.locals.businessId
    const data: TnewProduct = req.body

    await productsService.isProductAlreadyRegister(data.code)
    await productsService.newProduct({...data, businessId})
    res.status(201).send("new product")
}

export default {
    registerNewProduct,
}