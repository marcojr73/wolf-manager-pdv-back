import { prisma } from "../config/dataBase.js"


async function getAdressByData(street: string, number: string){
    return await prisma.adress.findFirst({
        where: {street, number, }
    })
}

export default getAdressByData