import express from "express"
import { configDotenv } from "dotenv"

configDotenv()

const app = express()
const port = process.env.PORT

app.get("/ping", (req, res) => {
  console.log("someone pinged here!");
  res.send("pong");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`)
});

