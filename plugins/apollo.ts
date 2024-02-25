export default defineNuxtPlugin((nuxtApp) => {
  // Nuxt Apollo auth hook
  nuxtApp.hook('apollo:auth', ({ token }) => {
    token.value = `Bearer 6-312laSzROBvcK8hdZgov2bNkqk75zBxGyoExwvZJA`
  })
})
