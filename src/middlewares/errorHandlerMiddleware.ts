import { NextFunction, Request, Response } from "express"

export default async function errorHandler(error: any, req: Request, res: Response, next: NextFunction){
    console.log(error)
    if(error.isJoi){
        return res.status(422).send("you send incorrect data")
    }
    if(error){
        return res.status(error.status).send(error.message)
    }
    res.status(500).send("an internal error occurred")
}