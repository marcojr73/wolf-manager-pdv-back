import { prisma } from "../config/dataBase.js"

async function findBusinessByEmail(email: string){
    return prisma.business.findFirst({
        where: {email}
    })
}

async function findBusinessByCnpj(cnpj: string){
    return prisma.business.findFirst({
        where: {cnpj}
    })
}

export default {
    findBusinessByEmail,
    findBusinessByCnpj
}