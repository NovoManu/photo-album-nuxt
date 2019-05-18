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
  server: {
    port: 8080
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
  plugins: [
    '~plugins/vuetify.ts',
    '~plugins/ui.ts',
    '~plugins/api.ts',
    '~plugins/visibility-observer.ts'
  ],
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com/'
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
