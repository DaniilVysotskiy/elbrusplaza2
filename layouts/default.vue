<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
@import url('assets/styles/global.scss');

html {
  font-family: "Selina", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
.min-height {
  min-height: 800px;
}
.hatching-white {
  background: repeating-linear-gradient(-30deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 3px, white 3px, white 4px);
}
.hatching-yellow {
  background: repeating-linear-gradient(-30deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 3px, var(--yellow) 3px, var(--yellow) 4px);
}
</style>
