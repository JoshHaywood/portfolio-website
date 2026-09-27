export default defineNuxtConfig({
  compatibilityDate: '2026-09-27',

  typescript: {
    shim: false,
    tsConfig: {
      compilerOptions: {
        noImplicitOverride: true,
        noImplicitReturns: true,
        noFallthroughCasesInSwitch: true,
        forceConsistentCasingInFileNames: true,
        skipLibCheck: true,
      },
    },
  },

  css: ['~/assets/main.css'],

  app: {
    head: {
      title: 'Josh Haywood | Full-Stack Software Engineer',
      meta: [
        { charset: 'utf-8' },
        {
          key: 'description',
          name: 'description',
          content:
            'Full-stack software engineer with 3+ years of commercial experience building and supporting production software across frontend, backend and data systems.',
        },
        { name: 'author', content: 'Josh Haywood' },
        { name: 'google-site-verification', content: 'HdPWnU6uSFkgMmVnx4WWIkD2MX04xKkXY0lXaeSlMHk' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://www.joshhaywood-portfolio.com/',
        },
      ],
      script: [
        {
          innerHTML: `
            (function (c, l, a, r, i, t, y) {
              c[a] = c[a] || function () {
                (c[a].q = c[a].q || []).push(arguments);
              };

              t = l.createElement(r);
              t.async = 1;
              t.src = "https://www.clarity.ms/tag/" + i;
              y = l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "fmzcqh3it4");
          `,
          type: 'text/javascript',
        },
      ],
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@tsparticles/nuxt4',
    '@vueuse/motion/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
  ],
});
