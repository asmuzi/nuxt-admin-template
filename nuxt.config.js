const VUE_APP_BASE_API_PRFFIX = '/sys'

export default {
  env: {
    BASE_URL: process.env.BASE_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-admin-template',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/api-plugin', '@/plugins/element-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  router: {
    middleware: ['authenticated'],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'cookie-universal-nuxt',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
    proxy: true,
    // proxy: process.env.NODE_ENV === 'development',
    prefix: VUE_APP_BASE_API_PRFFIX,
    // credentials: true,
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BASE_URL,
    },
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },
  proxy: {
    VUE_APP_BASE_API_PRFFIX: {
      target: process.env.BASE_URL,
      pathRewrite: { VUE_APP_BASE_API_PRFFIX: '' },
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
}
