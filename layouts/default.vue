<template>
  <div id="layout">
    <header id="header">
      <NavBar />
    </header>
    <main id="main">
      <NuxtPage />
    </main>
    <footer id="footer"></footer>
  </div>
</template>

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
