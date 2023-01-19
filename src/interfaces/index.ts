interface TsignUp {
    email: string,
    businessName: string,
    cnpj: string,
    password: string,
}

interface Tbusiness {
    email: string,
    businessName: string,
    cnpj: string,
    passCrypt: string,
}

interface TsignIn {
    email: string,
    password: string,
}

interface TnewClient {
    name: string, 
    street: string, 
    number: string, 
    phone: string
}

interface TnewProduct {
    nameProduct: string,              
    description: string | null,              
    picture:  string | null,
    provider:  string,
    brand:  string | null,
    code:  number,
    codeBar:  string
    stock: number,
    unitMeasurement: string,
    costPrice: number,
    salePrice: number,
    validate: number | null,
    icms:  number
    businessId: number | null
}

export {
    TsignUp,
    Tbusiness,
    TsignIn,
    TnewClient,
    TnewProduct
}