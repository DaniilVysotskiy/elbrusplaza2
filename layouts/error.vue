<template lang="pug">
  .error
    .container
      .error__wrapper
        h1.error__title(v-if="error.statusCode === 404")
          span.error--404 404
          span {{ $t('PAGE_NOT_FOUND') }}
        h1(v-else) {{ $t('ERROR_OCCURED') }}
        nuxt-link.error__link(to="/") {{ $t('HOME_PAGE') }}
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
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
    &--404 {
      font-size: 10rem;
      color: $yellow;
      margin-bottom: 1rem;
    }
    &__link {
      color: white;
    }
  }
</style>