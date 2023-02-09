import { prisma } from "../config/dataBase.js"

async function getBalanceByMonthYear(month: number, year: number, businessId: number){
    return await prisma.$queryRaw`
        SELECT SUM(price), count(*) FROM sales WHERE EXTRACT(MONTH FROM "createdAt") = ${month}
        AND EXTRACT(YEAR FROM "createdAt") = ${year}
        AND sales."businessId" = ${businessId}
    `
}

export default {
    getBalanceByMonthYear
}