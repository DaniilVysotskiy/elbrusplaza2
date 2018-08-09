<template lang="pug">
  section.section#my-footer
    .my-footer.min-height
      <p><nuxt-link to="/ru/login">Login</nuxt-link></p>
</template>

<style lang="scss" >

  @import '../../assets/styles/_variables.scss';
  .my-footer {
    width: 100%;
    height: 100vh;
    background-color: $yellow;
  }

</style>
