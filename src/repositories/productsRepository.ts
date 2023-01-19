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

async function getProductsByBusinessId(businessId: number){
    return await prisma.products.findMany({
        where: {businessId},
        select : {
            nameProduct: true,              
            description: true,
            picture: true,
            provider: true,
            brand: true,
            code: true,
            codeBar: true,
            stock: true,
            unitMeasurement: true,
            costPrice: true,
            salePrice: true,
            validate: true,
            icms: true,
        }
    })
}

export default {
    getProductByCode,
    newProductDb,
    getProductsByBusinessId
}