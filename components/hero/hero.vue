<template lang="pug">
  section
    .hero.min-height
      .hero__bg
      .hero__info
        .hero__info--bg
        .hero__info--wrapper
          h1.hero__title {{ $t('HERO.HOTEL_NAME') }}
          p.hero__text
            | {{ $t('HERO.HOTEL_DESCRIPTION_1') }}
          p.hero__text
            | {{ $t('HERO.HOTEL_DESCRIPTION_2') }}

</template>

<style lang="scss">
  @import './hero.scss';
</style>
