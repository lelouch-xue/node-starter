import { text } from './course/test.js'

import { open, readdir } from 'node:fs/promises'
import path, { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
console.log(text)

// const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))

let file
try {
  file = await open(resolve(__dirname, 'assets/plate.csv'))

  for await (const line of file.readLines()) {
    console.log(line)
  }
} finally {
  await file?.close()
}

try {
  const files = await readdir('./')
  for (const file of files) console.log(file)
} catch (err) {
  console.error(err)
}
