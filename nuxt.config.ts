import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    'nuxt-kql',
  ],

  kql: {
    url: 'http://kirby-headless-starter.test',
    token: 'test',
    prefix: 'api/kql',
    auth: 'bearer'
  },
})
