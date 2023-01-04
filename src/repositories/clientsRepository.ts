import { prisma } from "../config/dataBase.js"

async function findClientByName(name: string, businessId: number) {
    return await prisma.clients.findFirst({
        where: {businessId, name}
    })
}

async function newClientOfBusiness(name: string, businessId: number){
    await prisma.clients.create({
        data: {name, businessId}
    })
}

async function getClientsByBusinessId(businessId: number){
    return {
        businessName: await prisma.business.findFirst({
            select: {businessName: true},
            where: {id: businessId}
        }),
        clients: await prisma.clients.findMany({
            where: {businessId},
        }) 
    } 
}

export default {
    findClientByName,
    newClientOfBusiness,
    getClientsByBusinessId
}