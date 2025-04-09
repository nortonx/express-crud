import express from "express";
import { configDotenv } from "dotenv";
import { routerInfo } from "./rotas/info/rotas.ts";
import { routerFilmes } from "./rotas/filmes/rotas.ts"
import { primeiroMiddleware } from "./middlewares/primeiro.ts";
import { routerAuth } from "./rotas/autenticacao/rotas.ts";
import { jwtMiddleware } from "./middlewares/jwt.ts";
configDotenv();

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(primeiroMiddleware)
// app.use(jwtMiddleware)
app.use(routerAuth)
app.use("/info", jwtMiddleware, routerInfo)
app.use("/filmes", routerFilmes)

app.get("/ping", (req, res) => {
	res.send("pong!");
});

const porta = process.env.PORT;


app.listen(porta, () => {
	console.log(`Servidor rodando na porta ${porta}!`);
});
