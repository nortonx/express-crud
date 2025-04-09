import express from "express";
import { usuarios } from "../../dados/usuarios.ts";
import type { Usuario } from "../../model/index.ts";
import bcrypt from "bcrypt";

export function cadastrar(req: express.Request, res: express.Response) {
	const { email, senha } = req.body;

	if (!email || !senha) {
		res.status(401).send("Email ou a senha é inválido");
		return;
	}

	const existente = usuarios.find((u: Usuario) => u.email === email);

	if (existente) {
		res.send("Usuário já está cadastrado");
		return;
	}

	const novoUsuario = { email, senha: bcrypt.hashSync(senha, 5) };
	console.log(novoUsuario);
	usuarios.push(novoUsuario);

	res.send("Usuario foi criado");
}
