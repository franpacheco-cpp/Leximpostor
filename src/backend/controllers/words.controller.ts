import type { Words } from "types/env.d.ts"
import { type Request, type Response } from "express"
import { readFile } from "node:fs/promises"
import path from "node:path"

const dirname = path.resolve()

const wordsData = async (): Promise<Words> => {
  const wordsFile = await readFile(path.join(dirname, "api/words.json"), { encoding: "utf8" })
  return JSON.parse(wordsFile)
}

const words = await wordsData()

export const getWords = (req: Request, res: Response) => {
  return res.json(words)
}
