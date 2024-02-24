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
        },
        getAuth: () => `Bearer ${process.env.NUXT_ENV_CDA_TOKEN}`,
      },
    },
  },
})
