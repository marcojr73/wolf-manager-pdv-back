import { prisma } from "../config/dataBase.js"

async function findClientByName(name: string, businessId: number) {
    return await prisma.clients.findFirst({
        where: {businessId, name}
    })
}

export default {
    findClientByName
}