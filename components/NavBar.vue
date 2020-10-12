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
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;

  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }

  li {
    display: inline-block;
    list-style: outside none none;
    margin: 0.7em 1.5em;
    padding: 0;

    a {
      padding: 0.3em 0;
      color: rgba(255, 255, 255, 0.5);
      position: relative;
      text-decoration: none;

      &:before,
      &:after {
        height: 3px;
        position: absolute;
        content: '';
        -webkit-transition: all 0.35s ease;
        transition: all 0.35s ease;
        background-color: #2980b9;
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
      &.nuxt-link-exact-active {
        color: #ffffff;

        &:before,
        &:after {
          width: 100%;
        }
      }
    }
  }
}
</style>
