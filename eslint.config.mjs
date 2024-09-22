import { ntnyq } from '@ntnyq/eslint-config'
import globals from 'globals'

export default ntnyq(
  {
    javascript: {
      overrides: {
        camelcase: [
          'error',
          {
            allow: ['^GM_'],
          },
        ],
      },
    },
  },
  {
    name: 'ntnyq/globals/monkey',
    languageOptions: {
      globals: {
        ...globals.greasemonkey,
      },
    },
  },
)
