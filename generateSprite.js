import path from 'node:path'
import svgMixer from 'svg-mixer'

const generateSymbolId = (file, prefix) => prefix + path.basename(file, '.svg')

export async function generateSprite() {
  const result = await svgMixer('icons/*.svg', {
    generateSymbolId: s => generateSymbolId(s, 'sheikah-'),
    spriteConfig: {
      filename: '',
      usages: false,
      spacing: 0,
      attrs: { 'arial-hidden': 'true' },
    },
  })

  console.log(result.content)
}

generateSprite()
