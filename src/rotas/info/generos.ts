import type { Filme, Genero } from "../../model/index.ts";
import { filmes } from "../../dados/filmes.ts";
import express from "express"

export function pegarGeneros(req:express.Request,res:express.Response){
    const dados = new Set(filmes.flatMap((filme:Filme)=>{
        return filme.genero.map((g:Genero)=>JSON.stringify(g))
    }))
    const arr = Array.from(dados).map(g=> JSON.parse(g as string))
    res.json(arr)
}