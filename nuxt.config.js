module.exports = {
  /*
  ** Server middleware
  */
  // serverMiddleware: [
  //   { path: '/api/feedback', handler: '~/api/index.js' }
  // ],
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
    { src: '@/assets/styles/main.scss', lang: 'scss' }
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
    '~/plugins/vue2-filters.js',
    '~/plugins/vue2-google-maps.js',
    { src: '~/plugins/vue2-youtube.js', ssr: false },
    { src: '~/plugins/vue2-datepicker.js', ssr: false }
  ],
  generate: {
    // routes: ['/ru', '/ru/room', '/en', '/en/room']
  },
  modules: [
    '@nuxtjs/axios'
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
      };

      if (!isClient) {
        // This instructs Webpack to include `vue2-google-maps`'s Vue files
        // for server-side rendering
        config.externals.splice(0, 0, function (context, request, callback) {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false)
          } else {
            callback()
          }
        })
      };
    },
    vendor: [
      'axios',
      'vue2-datepicker',
      'vue-youtube-embed',
      'vue2-google-maps'
    ],
    transpile: [
      'vue-youtube-embed'
    ],
    styleResources: {
      scss: './assets/styles/_variables.scss'
    }
  }

}
