import express, { type Request, type Response } from "express"
import { getWords } from "./controllers/words.controller.js"
import path from "node:path"

export const dirname = path.resolve()
const PORT = 3000

const app = express()
express.static(path.join(dirname, "api/"))

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello world' })
})

app.get('/words', getWords)

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`)
})
