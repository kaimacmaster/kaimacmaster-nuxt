<template>
  <div class="page">
    <img
      src="/images/profile.png"
      class="headerHomeImage borderCircle"
      :alt="name"
    />
    <h1 v-text="name" />
    <section class="headingMd">
      <p>
        I'm a full-stack web developer specialising in front-end development with over nine years working in industry.
      </p>
      <p>
        Proficient in all stages of development including dev-ops, front-end, back-end, architecture and web design.
      </p>
    </section>
    <a href="mailto:kai@macmaster.co.uk">kai@macmaster.co.uk</a>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: 'Kai Macmaster'
  })
}
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 2rem;
}

.borderCircle {
  border-radius: 9999px;
}

.headerHomeImage {
  width: 8rem;
  height: 8rem;
}

.headingMd {
  max-width: 32rem;
  font-size: 1.2rem;
  line-height: 1.5;
  p {
    padding-bottom: 0.75rem;
  }
}
</style>
