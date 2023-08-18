module.exports = {
  root: true,
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  rules: {
    'import/first': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
