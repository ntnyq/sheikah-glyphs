import fs from 'node:fs/promises'

const { version } = JSON.parse(await fs.readFile('package.json', 'utf8'))
const content = await fs.readFile('sheikah-glyphs.user.js', 'utf8')
const newContent = content.replace(/\/\/ @version\s+.*$/m, `// @version      ${version}`)
await fs.writeFile('sheikah-glyphs.user.js', newContent, 'utf8')
