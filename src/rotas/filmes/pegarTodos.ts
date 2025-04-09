import type { Filme } from "../../model/index.ts";
import { filmes } from "../../dados/filmes.ts";
import express from "express"
import { limparCampos } from "./utils/limparCampos.ts";

export function pegarTodos(req:express.Request,res:express.Response){
    const { ignorar } = req.query as any;
    const filmesProcessados = filmes.map((filme: Filme) => {
        return limparCampos(filme, ignorar);
    });
    res.status(200).json(filmesProcessados);
}