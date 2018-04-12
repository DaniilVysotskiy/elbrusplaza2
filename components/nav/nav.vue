<template lang="pug">
  .nav
    .container
      .nav__wrapper
        .nav__logo
          a.logo__wrapper(href="/")
            img.logo(:src="changeLogoOnScroll")
        .nav__menu.menu
          ul.menu__list
            li.menu__item.menu-item
              a.menu-item__link.menu-item__link--hotel.active(href="#hotel") Отель
            li.menu__item.menu-item
              a.menu-item__link.menu-item__link--rooms(href="#rooms") Номера
            li.menu__item.menu-item
              a.menu-item__link.menu-item__link--feedback(href="#feedback") Отзывы
            li.menu__item.menu-item
              a.menu-item__link.menu-item__link--contacts(href="#contacts") Контакты
          ul.menu__lang
            li.menu__lang-item
              a.menu__lang-button.active(href="#0") RU
            li.menu__lang-item
              a.menu__lang-button(href="#0") EN
</template>

<script>
const bigLogo = require('~/assets/icons/logo.png');
const smallLogo = require('~/assets/icons/logo_1.svg');

export default {
  data () {
    return {
      isTopOfPage: true
    }
  },
  methods: {
    handleScroll(event) {
      if (window.scrollY > 1) {
        this.isTopOfPage = false;
      } else {
        this.isTopOfPage = true;
      }
    }
  },
  computed: {
    changeLogoOnScroll() {
      if (this.isTopOfPage) {
        return bigLogo;
      } else {
        return smallLogo;
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>


<style lang="scss">
@import url('assets/styles/_theme.scss');
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 60px 0;
    z-index: 100;
    &__wrapper {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
    }
    &__menu {
      background-color: var(--red);
      background-image: url('~assets/imgs/nav-bg.jpg');
      background-repeat: no-repeat;
      background-position: right;
      background-size: contain;
      min-width: 520px;
      height: 50px;
    }
    &__logo {
      min-width: 75px;
      min-height: 75px;
    }
  }
  .menu {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    &__list {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      margin: 0 -15px;
      padding: 0;
      list-style: none;
    }
    &__item {
      flex: 1 1 auto;
    }
    &__lang {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 -15px;
      padding: 0;
      list-style: none;
    }
    &__lang-item {
      margin: 0 15px;
    }
    &__lang-button {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ThamesC;
      font-size: 1rem;
      font-weight: 700;
      color: var(--yellow);
      text-transform: uppercase;
      text-decoration: none;
      text-align: center;
      &.active,
      &:hover,
      &:focus,
      &:active {
        font-style: italic;
        font-weight: normal;
        color: white;
      }
    }
  }
  .menu-item {
    margin: 0 15px;
    &__link {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ThamesC;
      font-size: 1rem;
      font-weight: 700;
      color: var(--yellow);
      text-transform: uppercase;
      text-decoration: none;
      text-align: center;
      &.active,
      &:hover,
      &:focus,
      &:active {
        font-style: italic;
        font-weight: normal;
        color: white;
      }
      &--hotel {
        min-width: 60px;
      }
      &--rooms {
        min-width: 78px;
      }
      &--feedback {
        min-width: 80px;
      }
      &--contacts {
        min-width: 110px;
      }
    }
  }
</style>
