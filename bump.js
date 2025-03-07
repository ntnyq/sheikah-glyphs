// @ts-check

import { readFile, writeFile } from 'node:fs/promises'
import { version } from './package.json'

const content = await readFile('sheikah-glyphs.user.js', 'utf8')
const newContent = content.replace(
  /\/\/ @version\s+(?:\S.*)?$/m,
  `// @version      ${version}`,
)
await writeFile('sheikah-glyphs.user.js', newContent, 'utf8')
