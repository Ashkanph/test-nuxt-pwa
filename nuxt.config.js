
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** PWA configuration
  */
  pwa: {
    workbox: {
      dev: true,
      runtimeCaching: [
        {
          // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
          urlPattern: 'http://localhost:4454',
          // Defaults to `networkFirst` if omitted
          // handler: 'networkFirst',
          // Defaults to `GET` if omitted
          method: 'GET'
        }
      ],
      // preCaching: [ 'http://localhost:4454' ]
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
