import express from "express"
import jwt from "jsonwebtoken"

export function jwtMiddleware(
                    req:express.Request, 
                    res:express.Response,
                    next:express.NextFunction){
    const token = req.headers["authorization"]?.split(" ")[1]
    
    if(!token){
        res.status(401).send("Usuário não está logado")
        return
    }

    try{
        const segredo = process.env.JWT_SECRET
        const payload:any = jwt.verify(token, segredo!)
        const dataExpiracao = payload.exp
        const dataAtual = (Date.now() / 1000) | 0

        if (dataAtual > dataExpiracao){
            throw Error()
        }
    }catch(error){
        res.status(401).send("Faça login novamente")
        return
    }

    next()
}