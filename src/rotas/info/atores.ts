import type { Filme, Ator} from "../../model/index.ts";
import { filmes } from "../../dados/filmes.ts";
import express from "express"

export function pegarAtores(req:express.Request,res:express.Response){
    const dados = new Set(filmes.flatMap((filme:Filme)=>{
        return filme.elenco.map((a:Ator)=>JSON.stringify(a))
    }))
    const arr = Array.from(dados).map(a=> JSON.parse(a as string))
    res.json(arr)
}