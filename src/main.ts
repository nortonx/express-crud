import express from "express"
import { configDotenv } from "dotenv"
import { filmes } from "./dados/filmes.ts"
import type { Filme } from "./model/index.ts";

configDotenv()

const app = express()
const port = process.env.PORT

function clearFields(filme: Filme, ignore: string | undefined) {
  
  const ignoredFields = ignore ? ignore.toString().split(',') : []

  const copia: Partial<Filme> = {...filme}
  ignoredFields.forEach((field: string) => {
    delete copia[field as keyof Filme]
  })
  return copia
}

app.get("/ping", (req, res) => {
  console.log("someone pinged here!");
  res.send("pong")
})

app.get("/filmes", (req, res) => {
  const { ignorar } = req.query as any
  const filmesProcessados = filmes.map((filme: Filme) => {
    return clearFields(filme, ignorar)
  })
  res.status(200).json(filmesProcessados)
})


app.get("/filmes/:id", (req, res) => {
  const { id } = req.params
  const { ignorar } = req.query as any
  
  const filme = filmes.find((filme: Filme) => filme.id === id)
  
  if (!filme) {
    res.status(404).json({ message: "Filme não encontrado"})
    return
  }

  res.status(200).json(clearFields(filme, ignorar))
})


app.listen(port, () => {
  console.log(`Server running on port ${port}...`)
});

