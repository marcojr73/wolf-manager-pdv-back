import { prisma } from "../config/dataBase.js"

async function findClientByData(name: string, businessId: number, street: string, number: string) {
    return await prisma.clients.findFirst({
        where: {
            businessId, name, adress: {
                AND: { street, number }
            }
        }
    })
}

async function newClientOfBusiness(name: string, street: string, number: string, phone: string, businessId: number) {
    const adressId = await prisma.adress.create({
        data: { street, number }
    })
    await prisma.clients.create({
        data: { name, phone, adressId: adressId.id, businessId }
    })
}

async function getClientsByBusinessId(businessId: number) {
    return await prisma.clients.findMany({
        select: {
            id: true, name: true, phone: true, debit: true, adress: {
                select: {
                    street: true,
                    number: true
                }
            }
        },
        where: { businessId },
    })
}

export default {
    findClientByData,
    newClientOfBusiness,
    getClientsByBusinessId,
}