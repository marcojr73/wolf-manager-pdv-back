import { prisma } from "../config/dataBase.js"
import { Tbusiness, TsignUp } from "../interfaces/index.js"

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

async function registerBusiness(data: Tbusiness) {
    await prisma.business.create({
        data: {businessName: data.businessName, cnpj: data.cnpj, email: data.email, password: data.passCrypt}
    })
}

export default {
    findBusinessByEmail,
    findBusinessByCnpj,
    registerBusiness
}