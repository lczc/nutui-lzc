module.exports = {
  root: true,

  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },

  "extends": ["taro/vue3"],

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        arrowParens: 'avoid',
        printWidth: 100
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': 0,
    'vue/multi-word-component-names': 'off',
    "no-undef": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
}
