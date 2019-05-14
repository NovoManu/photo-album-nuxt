import pkg from './package'

export default {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  loading: { color: '#fff' },
  css: [
    {
      src: '~/node_modules/vuetify/dist/vuetify.min.css',
      lang: 'css'
    },
    {
      src: '~/assets/scss/app.scss',
      lang: 'scss'
    }
  ],
  plugins: ['~plugins/vuetify.js'],
  modules: ['@nuxtjs/axios'],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  build: {
    loaders: {},
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
