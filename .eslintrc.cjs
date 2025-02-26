module.exports = {
  root: true,
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/vue3-strongly-recommended', 'plugin:prettier/recommended'],
  rules: {
    'import/first': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  overrides: [
    {
      files: ['index.vue', 'error.vue'], // Changing these file name will prevent Nuxt from recognizing them
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
};
