export default (context) => {
  return {
    httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/${context.env.NUXT_ENV_SPACE_ID}`,
    httpLinkOptions: {
      credentials: 'same-origin',
    },
    getAuth: () => `Bearer ${context.env.NUXT_ENV_CDA_TOKEN}`,
  }
}
