<template>
  <div id="layout" :class="{ dark }">
    <header id="header">
      <NavBar />
    </header>
    <main id="main">
      <Nuxt />
    </main>
    <footer id="footer"></footer>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  components: { NavBar },
  data: () => ({ dark: true }),
}
</script>

<style lang="scss">
#layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;

  #main {
    display: grid;
    place-items: center;
  }
}
</style>
