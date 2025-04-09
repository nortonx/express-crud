import type { Filme } from "../../model/index.ts";
import { filmes } from "../../dados/filmes.ts";
import express from "express"

export function criarUm(req:express.Request,res:express.Response){
    const novo:Filme = req.body
    if(!(novo.ano && novo.diretor && novo.elenco && 
        novo.genero && novo.sinopse && novo.titulo)){
            res.status(400).send("Dados enviados são inválidos")
            return
    }
    const aleatorio = (Math.random() * 100) | 0
    const id = `FIL1${aleatorio}`
    novo.id = id
    filmes.push(novo)
    res.status(201).json(novo)
}