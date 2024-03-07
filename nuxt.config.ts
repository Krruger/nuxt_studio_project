// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxthq/studio",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "nuxt-quasar-ui",
    "nuxt-mdi",
  ],
  quasar: {
    /* */
  },
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css",
      },
    },
  },
});
