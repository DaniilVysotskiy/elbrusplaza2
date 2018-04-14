<template lang="pug">
  div
    navigation
    hero
    hotel
</template>

<script>
import navigation from '~/components/nav/nav.vue'
import hero from '~/components/hero/hero.vue'
import hotel from '~/components/hotel/hotel.vue'

export default {
  components: {
    navigation,
    hero,
    hotel
  }
}
</script>

<style lang="scss">
.container {
  flex: 1 1 100;
  max-width: 1170px;
  height: 100%;
  padding: 0 15px;
  margin: 0 auto;
}
.section {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
  @media screen and (min-width: 1367px) {
    .container {
      max-width: 1170px;
    }
  }

  @media screen and (max-width: 1366px) {
    .container {
      max-width: 1000px;
    }
  }
</style>
