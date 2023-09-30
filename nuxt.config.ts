// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // pageTransition: { name: "layout", mode: "out-in" },
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
  },
  css: ["@/assets/style.scss"],
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', "@fedorae/nuxt-uikit"]

})
