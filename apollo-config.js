export default (context) => {
  console.log(context.env.NUXT_ENV_SPACE_ID)

  return {
    httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/${context.env.NUXT_ENV_SPACE_ID}`,
    httpLinkOptions: {
      credentials: 'same-origin',
    },
    getAuth: () => `Bearer phAyBqz84mlZiQNu598NTGh14RSfL65cf6xmSDXJ3rI`,
  }
}
