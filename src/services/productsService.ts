import errors from "../errors/index.js"
import { TnewProduct } from "../interfaces/index.js"
import productsRepository from "../repositories/productsRepository.js"

async function isProductAlreadyRegister(code: number){
    const isProduct = await productsRepository.getProductByCode(code)
    if(isProduct) errors.conflict("Code Already in use")
}

async function newProduct(data: TnewProduct) {
    await productsRepository.newProductDb(data)
}

async function getProducts(businessId: number){
    return await productsRepository.getProductsByBusinessId(businessId)
}

export default {
    isProductAlreadyRegister,
    newProduct,
    getProducts
}