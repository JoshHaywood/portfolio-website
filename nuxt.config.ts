export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    shim: false,
  },

  css: ['~/assets/main.css'],

  app: {
    head: {
      title: 'Josh Haywood | Portfolio',
      meta: [
        { charset: 'utf-8' },
        {
          hid: 'description',
          name: 'description',
          content:
            "I'm a recent graduate with a BSc in web development, aspiring to work as a front-end developer. I have a strong skill set in full-stack JavaScript development and here's where I showcase my work.",
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

  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
});
