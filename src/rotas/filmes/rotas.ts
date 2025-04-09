import { Router } from "express";
import { atualizarUm } from "./atualizarUm.ts";
import { criarUm } from "./criarUm.ts";
import { deletarUm } from "./deletarUm.ts";
import { pegarTodos } from "./pegarTodos.ts";
import { pegarUm } from "./pegarUm.ts";
import { jwtMiddleware } from "../../middlewares/jwt.ts";

export const routerFilmes = Router()

routerFilmes.get("/", pegarTodos);

routerFilmes.get("/:id", pegarUm);

routerFilmes.post("/",jwtMiddleware, criarUm)

routerFilmes.patch("/:id", jwtMiddleware, atualizarUm)

routerFilmes.delete("/:id",jwtMiddleware, deletarUm)