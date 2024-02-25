export default defineNuxtConfig({
  css: ['~/assets/scss/global.scss'],
  plugins: [],
  components: true,
  buildModules: [],
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.NUXT_ENV_SPACE_ID}`,
        httpLinkOptions: {
          credentials: 'same-origin',
          authorization: `Bearer 6-312laSzROBvcK8hdZgov2bNkqk75zBxGyoExwvZJA`,
        },
      },
    },
  },
})
