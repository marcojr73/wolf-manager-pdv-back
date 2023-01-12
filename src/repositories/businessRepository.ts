import { prisma } from "../config/dataBase.js"

async function getBusinessNamesByBusinessId(businessId: number) {
    return await prisma.business.findFirst({
        select: { businessName: true },
        where: { id: businessId },
    })
}

export default {
    getBusinessNamesByBusinessId
}