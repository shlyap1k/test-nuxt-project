// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore
  routeRules: {
    '/': {ssr: true},
    'post/[id]': {ssr: true}
  },
// @ts-ignore
  runtimeConfig: {
    public: {
      API: process.env.API
    }
  },
  devtools: { enabled: true },
  modules: [
    // Simple usage
    '@pinia/nuxt',
    // With options
    // ['@nuxtjs/eslint-module', { /* module options */ }]
  ],
})
