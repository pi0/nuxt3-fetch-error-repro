import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['nuxt-kql'],

  kql: {
    url: 'https://kirby-headless-starter.jhnn.dev',
    token: 'test',
    prefix: 'api/kql',
    auth: 'bearer',
  },
})
