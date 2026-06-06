import type { UserConfig } from '@commitlint/types'

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'],
    'type-case': [2, 'always', 'lower-case'],

    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],

    'header-max-length': [2, 'always', 72],

    'body-max-line-length': [2, 'always', 100]
  }
}

export default config
