<template lang="pug">
  div
    navigation
    hero
</template>

<script>
import navigation from '~/components/nav/nav.vue'
import hero from '~/components/hero/hero.vue'

export default {
  components: {
    navigation,
    hero
  }
}
</script>

<style lang="scss">
.container {
  flex: 1 1 100;
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
}
.section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
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
</style>
