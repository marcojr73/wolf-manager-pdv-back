import { prisma } from "../config/dataBase.js"

async function findClientByName(name: string, businessId: number) {
    return await prisma.clients.findFirst({
        where: { businessId, name }
    })
}

async function findClientByData({ name, street, businessId }: { name: string, street: string, businessId: number }) {
    return await prisma.adress.findFirst({
        where: { street },
        include: {
            clients: {
                where: { name, businessId }
            }
        }
    })
}

async function newClientOfBusiness(name: string, street: string, number: number, phone: string, businessId: number) {
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
            name: true, phone: true, debit: true, adress: {
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
    findClientByName,
    newClientOfBusiness,
    getClientsByBusinessId,
    findClientByData

}