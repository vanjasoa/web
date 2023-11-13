// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-directus'
  ],
  directus: {
    url: "https://directus-production-2a05.up.railway.app/"
  }
})
