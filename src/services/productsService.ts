import errors from "../errors/index.js"
import { TnewProduct } from "../interfaces/index.js"
import productsRepository from "../repositories/productsRepository.js"

async function isProductAlreadyRegister(code: number){
    const isProduct = await productsRepository.getProductByCode(code)
    if(isProduct) errors.conflict("Product Already register")
}

async function newProduct(data: TnewProduct) {
    await productsRepository.newProductDb(data)
}

export default {
    isProductAlreadyRegister,
    newProduct
}