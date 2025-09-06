import express, { type Request, type Response } from "express"
import path from "node:path"

const dirname = path.resolve()
const PORT = 3000

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send("Hello world")
})

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`)
})
