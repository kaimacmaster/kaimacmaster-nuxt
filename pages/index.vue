<template>
  <div class="page">
    <figure class="profile">
      <img src="/images/profile.png" class="profile-image" :alt="name" />
    </figure>
    <h1 v-text="name" />
    <section class="bio">
      <p>
        I'm a full-stack web developer specialising in front-end development
        with over nine years working in industry.
      </p>
      <p>
        Proficient in all stages of development including dev-ops, front-end,
        back-end, architecture and web design.
      </p>
    </section>
    <a href="mailto:kai@macmaster.co.uk">kai@macmaster.co.uk</a>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  transition: 'page',
  data: () => ({
    name: 'Kai Macmaster',
  }),
}
</script>

<style lang="scss">
@import '~/assets/scss/variables.scss';

.profile {
  border: 3px solid white;
  background-color: $color-fade;
  border-radius: 50%;
  z-index: 3;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  margin-bottom: 2rem;

  &-image {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    z-index: 1;
  }
}

.bio {
  max-width: 32rem;
  text-align: center;
  padding: 0 0.25rem;

  @media only screen and (min-width: 32.5rem) {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  p {
    padding-bottom: 1rem;
  }
}
</style>
