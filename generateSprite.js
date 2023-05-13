import path from 'node:path'
import svgMixer from 'svg-mixer'

const spriteConfig = {
  filename: '',
  usages: false,
  spacing: 0,
  attrs: { 'arial-hidden': 'true' },
}
const generateSymbolId = (file, prefix) => prefix + path.basename(file, '.svg')

export async function generateSprite() {
  const result = await svgMixer(`icons/*.svg`, {
    generateSymbolId: s => generateSymbolId(s, 'sheikah-'),
    spriteConfig,
  })

  console.log(result.content)
}

generateSprite()
