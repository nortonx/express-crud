import express from "express"

export function primeiroMiddleware(
                    req:express.Request, 
                    res:express.Response,
                    next:express.NextFunction){
    console.log("passei aqui")
    next()
}