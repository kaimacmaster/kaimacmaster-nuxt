<template>
  <div id="layout" class="min-h-dvh grid">
    <header id="header">
      <NavBar />
    </header>
    <main id="main" class="grid place-items-center">
      <NuxtPage />
    </main>
  </div>
</template>

<style lang="scss">
#layout {
  grid-template-rows: auto 1fr auto;

  #main {
    display: grid;
    place-items: center;
  }
}
</style>
