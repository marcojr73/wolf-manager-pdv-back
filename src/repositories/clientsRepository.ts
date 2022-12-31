import { prisma } from "../config/dataBase.js"

async function findClientByName(name: string, businessId: number) {
    return await prisma.clients.findFirst({
        where: {businessId, name}
    })
}

async function newClientOfBusiness(name: string, businessId: number){
    console.log(businessId)
    await prisma.clients.create({
        data: {name, businessId}
    })
}

export default {
    findClientByName,
    newClientOfBusiness
}