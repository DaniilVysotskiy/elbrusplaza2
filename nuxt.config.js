module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'elbrusplaza2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    // { src: '@/assets/styles/global.scss', lang: 'scss' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ab0433' },
  /*
  ** Router
  */
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash
        }
      }
    },
    middleware: 'i18n'
  },
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/vue2-filters.js'
  ],
  generate: {
    // routes: ['/ru', '/ru/room', '/en', '/en/room']
  },
  modules: [
    // provide path to the file with resources
    ['nuxt-sass-resources-loader', '@/assets/styles/main.scss'],

    // or array of paths
    // ['nuxt-sass-resources-loader', [
    //     '@/path/to/first-resources.sass',
    //     '@/path/to/second-resources.scss',
    // ]],
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

}
