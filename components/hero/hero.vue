<template lang="pug">
  section
    .hero
      .hero__info
        .hero__info--bg
        .hero__info--wrapper
          h1.hero__title Отель «Эльбрус Плаза»
          p.hero__text
            | Новый гостиничный комплекс «ELBRUS PLAZA» построен в 2018 году и находится на живописной Баксанской долине, в окружении соснового бора национального парка «Приэльбрусье».
            br
            | Это идеальное место, с которого начнется ваше знакомство со склонами Эльбруса!

</template>

<style lang="scss">
@import url('assets/styles/_theme.scss');

  .hero {
    position: relative;
    background-image: url(~/assets/imgs/hero-bg.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 0;
    padding-top: 61.75%;
    margin-bottom: -12%;
    z-index: 2;
    &__info {
      position: absolute;
      top: 20%;
      right: 0;
      display: flex;
      width: 702px;
      height: 500px;
      &--bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .8;
        background-image: url(~/assets/imgs/hero-decorative-element.png);
        z-index: -1;
      }
      &--wrapper {
        align-self: flex-end;
        margin-left: 8rem;
        margin-bottom: 8rem;
        width: 45%;
      }
    }
    &__title {
      font-family: 'ThamesC';
      font-style: italic;
      font-size: 1.4rem;
      line-height: 2rem;
      font-weight: normal;
      color: var(--yellow);
      text-transform: uppercase;
    }
    &__text {
      font-size: .8rem;
      line-height: 1rem;
      color: white;
    }
  }
</style>
