<template lang="pug">
  .error
    .container
      navigation
      .error__wrapper
        h1.error__title(v-if="error.statusCode === 404")
          span.error--404 404
          span {{ $t('PAGE_NOT_FOUND') }}
        h1.error__title(v-else)
          span.error--unknown ☹
          span {{ $t('ERROR_OCCURED') }}
        nuxt-link.error__link(to="/") {{ $t('HOME_PAGE') }}
</template>

<script>
import navigation from '~/components/nav/nav.vue'

export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  components: {
    navigation
  }
}
</script>

<style lang="scss">
  .error {
    background-color: $orange;
    color: $yellow;
    &__wrapper {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &__title {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    &--404,
    &--unknown {
      font-size: 10rem;
      color: $yellow;
      margin-bottom: 1rem;
    }
    &__link {
      color: white;
    }
  }
</style>