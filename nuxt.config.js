import path from 'path'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  head: {
    title: 'minishop-nuxt2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:"https://fonts.googleapis.com/icon?family=Material+Icons"},
      {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"}
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css:['~/assets/css/main.css'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
      // https://go.nuxtjs.dev/tailwindcss
      '@nuxtjs/tailwindcss',
      // https://go.nuxtjs.dev/typescript
      '@nuxt/typescript-build',
      // https://composition-api.nuxtjs.org/getting-started/setup#quick-start
      '@nuxtjs/composition-api/module',
      '@pinia/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
