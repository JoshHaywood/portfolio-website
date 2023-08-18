export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    shim: false,
  },

  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
});
