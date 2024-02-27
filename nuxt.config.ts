export default defineNuxtConfig({
  app: { pageTransition: { name: 'page', mode: 'out-in' } },
  css: ['~/assets/scss/global.scss'],
  modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/f4p6g6fdg4q5`,
        httpLinkOptions: {
          credentials: 'same-origin',
          authorization: `Bearer 6-312laSzROBvcK8hdZgov2bNkqk75zBxGyoExwvZJA`,
        },
      },
    },
  },
})
