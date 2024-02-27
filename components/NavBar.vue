<template>
  <nav id="navbar">
    <ul id="navbar__list">
      <li
        id="navbar__list-item"
        v-for="link in links"
        :key="link.name.toLowerCase()"
      >
        <NuxtLink :to="link.to">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  links: {
    type: Array,
    default: () => [
      { name: 'Home', to: '/' },
      { name: 'Experience', to: '/experience' },
    ],
  },
})
</script>

<style lang="scss" scoped>
#navbar {
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;

  &__list {
    margin: 0;
    padding: 0;
  }

  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }

  li {
    display: inline-block;
    list-style: none;
    margin: 0.7rem 0;
    padding: 0.7rem 1rem;

    a {
      @apply text-zinc-500;
      padding: 0.3em 0;
      position: relative;
      text-decoration: none;

      &:before,
      &:after {
        @apply bg-amber-500;
        height: 3px;
        position: absolute;
        content: '';
        -webkit-transition: all 0.35s ease;
        transition: all 0.35s ease;
        width: 0;
      }

      &:before {
        top: 0;
        right: 0;
      }

      &:after {
        bottom: 0;
        left: 0;
      }

      &:hover,
      &.router-link-exact-active {
        @apply text-zinc-50;

        &:before,
        &:after {
          width: 100%;
        }
      }
    }
  }
}
</style>
