import type { Filme} from "../../model/index.ts";
import { filmes } from "../../dados/filmes.ts";
import express from "express"

export function pegarDiretores(req:express.Request,res:express.Response){
	const dados = new Set(filmes.map((filme:Filme)=>{
		return JSON.stringify(filme.diretor)
	}))
	const arr = Array.from(dados).map(d=> JSON.parse(d as string))
	res.json(arr)
}