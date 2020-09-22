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
html {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
  font-size: 18px;
}

html,
body {
  padding: 0;
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a {
  color: #2889fc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

img {
  max-width: 100%;
  display: block;
}

#layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;

  #main {
    display: grid;
    place-items: center;
  }

  &.dark {
    background-color: #2c2d30;
    color: #f7feff;
  }
}
</style>
