// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    // Options
  },
  app: {
    head: {
      title: 'Simple Vue', 
      meta: [
        { name: 'description', content: 'Nuxt 3'}
      ], 
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCy_API_KEY
  }
})
