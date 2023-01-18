import joi from "joi"

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
const pictureRegex = /(https?:\/\/.*\.(?:png|jpg|gif|jpeg))/i
const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/

const schemaSignUp = joi.object({
    email: joi.string().email().pattern(emailRegex).required(),
    businessName: joi.string().required(),
    cnpj: joi.string().pattern(cnpjRegex).required(),
    password: joi.string().min(8)
})

const schemaSignIn = joi.object({
    email: joi.string().email().pattern(emailRegex).required(),
    password: joi.string().min(8).required(),
})

const schemaClients = joi.object({
    name: joi.string().min(3).required(),
    street: joi.string().min(3).required(),
    number: joi.string().required(),
    phone: joi.string().required()
})

const schemaProducts = joi.object({
    nameProduct: joi.string().min(3).required(),              
    description: joi.string(),              
    picture:  joi.string(),
    provider:  joi.string().min(3).required(),
    brand:  joi.string(),
    code:  joi.number().min(1).required(),
    codeBar:  joi.string().required(),
    stock: joi.number().required(),
    unitMeasurement: joi.string().required(),
    costPrice: joi.number().min(0).required(),
    salePrice: joi.number().min(0).required(),
    validate: joi.number(),
    icms:  joi.number().required()
})

export default {
    schemaSignUp,
    schemaSignIn,
    schemaClients,
    schemaProducts
} 