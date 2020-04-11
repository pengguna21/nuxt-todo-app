module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs'
    // 'eslint:recommended',
    // 'plugin:vue/recommended',
    // 'plugin:prettier/recommended'
  ],
  // diperlukan untuk melinting file *.vue
  plugins: [
    'vue'
  ],
  // tambahkan aturan anda disini
  rules: {
    'no-console': 1,
    'no-unused-vars': 1
  }
}