<template lang="pug">
  div
    navigation
    div
      h1.title elbrusplaza2
      h2.subtitle Nuxt.js project
      .links
        a.button--green(
          href="https://nuxtjs.org/"
          target="_blank"
        ) Documentation
        a.button--grey(
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
        ) GitHub
</template>

<script>
import navigation from '~/components/nav/nav.vue'

export default {
  components: {
    navigation
  }
}
</script>

<style lang="scss">
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
