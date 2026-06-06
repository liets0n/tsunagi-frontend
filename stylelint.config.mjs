/**
 * @type {import("stylelint").Config}
 */
const stylelintConfig = {
  extends: [
    'stylelint-config-standard',
    '@dreamsicle.io/stylelint-config-tailwindcss'
  ],
  overrides: [
    {
      files: ['**/*.{css}'],
      customSyntax: 'postcss'
    }
  ],
  rules: {
    'at-rule-no-unknown': null
  }
}

export default stylelintConfig
