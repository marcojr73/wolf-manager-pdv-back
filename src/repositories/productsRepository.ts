import { prisma } from "../config/dataBase.js"
import { TnewProduct } from "../interfaces/index.js"

async function getProductByCode(code: number) {
    return await prisma.products.findFirst({
        where: { code }
    })
}

async function newProductDb(data: TnewProduct) {
    await prisma.products.create({
        data: data
    })
}

export default {
    getProductByCode,
    newProductDb
}