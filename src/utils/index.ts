/* eslint-disable @typescript-eslint/no-explicit-any */

import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express"

import errors from "../errors/index.js"

async function validateTokenAndGetAccount(req: Request, res: Response, next: NextFunction){
    const token: string = req.headers.authorization?.replace("Bearer", "").trim()
    if (token === undefined) errors.unauthorized("token not send")

    const {KEYJWT} = process.env
    const {businessId} = jwt.verify(token, KEYJWT, function(err, decoded){
        if(err) errors.unauthorized("token expired or invalid")
        return decoded
    }) as any
    res.locals.businessId = businessId
    next()
}

export default {
    validateTokenAndGetAccount
}