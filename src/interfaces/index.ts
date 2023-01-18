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

export {
    TsignUp,
    Tbusiness,
    TsignIn,
    TnewClient
}