import withNuxt from './.nuxt/eslint.config.mjs';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default withNuxt(
  {
    name: 'portfolio/pages',
    files: ['app/pages/**/index.vue', 'app/error.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },

  eslintPluginPrettierRecommended,

  {
    name: 'portfolio/prettier',
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
);
