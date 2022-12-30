import joi from "joi"

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
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
    password: joi.string().min(4).required(),
})

export default {
    schemaSignUp,
    schemaSignIn
} 