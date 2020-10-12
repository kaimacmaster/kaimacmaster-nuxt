export default {
  target: 'server',
  head: {
    title: 'Kai Macmaster',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Hello, I'm Kai. I'm a full stack web developer specialising in front-end.",
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/scss/global.scss'],
  plugins: [],
  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/apollo',
    ['nuxt-canonical', { baseUrl: 'https://kaimacmaster.co.uk' }],
  ],
  apollo: {
    clientConfigs: {
      default: '~/apollo-config.js',
    },
  },
  build: {
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining'],
    },
  },
}
