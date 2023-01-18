import { Request, Response } from "express"

async function registerNewProduct(req: Request, res: Response){
    const businessId: number = res.locals.businessId
    res.status(201).send("new product")
}

export default {
    registerNewProduct,
}