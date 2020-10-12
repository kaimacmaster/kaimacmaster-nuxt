<template>
  <nav id="navbar">
    <ul id="navbar__list nb_list">
      <li
        id="navbar__list-item"
        v-for="link in links"
        :key="link.name.toLowerCase()"
      >
        <NuxtLink :to="link.to" v-text="link.name" />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    links: {
      type: Array,
      default: () => [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'Experience',
          to: '/experience',
        },
      ],
    },
  },
}
</script>

<style lang="scss" scoped>
#navbar {
  display: grid;
  align-items: center;
  height: 3rem;

  &__list {
    max-width: 48rem;
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
  }

  &__list-item {
    display: inline;

    a {
      color: inherit;
      text-decoration: none;
      margin: 0 0.75rem;

      &:hover {
        color: #2889fc;
        text-decoration: underline;
      }
    }
  }
}
</style>
