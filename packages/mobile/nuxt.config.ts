// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["../website"],
  runtimeConfig: {
    public: {
      databaseURL: process.env.DATABASE_URL,
      databaseKEY: process.env.DATABASE_KEY
    }
  }
});
