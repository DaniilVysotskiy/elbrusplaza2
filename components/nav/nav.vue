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
              a.menu-item__link.menu-item__link--hotel(href="#hotel") {{ $t('links.hotel') }}
            li.menu__item.menu-item
              a.menu-item__link.menu-item__link--rooms(href="#rooms") {{ $t('links.rooms') }}
            li.menu__item.menu-item
              a.menu-item__link.menu-item__link--feedback(href="#feedback") {{ $t('links.feedback') }}
            li.menu__item.menu-item
              a.menu-item__link.menu-item__link--contacts(href="#contacts") {{ $t('links.contacts') }}
          ul.menu__lang
            li.menu__lang-item
              nuxt-link.menu__lang-button(to="/" active-class="active" exact @click="setLang('ru')") RU
            li.menu__lang-item
              nuxt-link.menu__lang-button(to="/en" active-class="active" @click="setLang('en')") EN
</template>

<script>
const bigLogo = require('~/assets/icons/logo.png');
const smallLogo = require('~/assets/icons/logo_1.svg');

function throttle(actionFn) {
  let isRunning = false;
  return function () {
    if (isRunning) return;
    isRunning = true;
    window.requestAnimationFrame(() => {
      actionFn();
      isRunning = false;
    });
  }
}

export default {
  data () {
    return {
      isTopOfPage: true,
      currentLang: 'ru'
    }
  },
  methods: {
    handleScroll(event) {
      if (window.scrollY > 1) {
        this.isTopOfPage = false;
      } else {
        this.isTopOfPage = true;
      }
    },
    setLang(lang) {
      this.currentLang = lang;
      this.$store.commit('SET_LANG', this.currentLang);
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
  created: function() {
    this.currentLang = this.$store.state.locale;
    console.log('created this.currentLang:', this.currentLang);
  },
  beforeMount () {
    window.addEventListener('scroll', throttle(this.handleScroll));
  },
  beforeDestroy () {
    window.removeEventListener('scroll', throttle(this.handleScroll));
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
      background-color: transparent;
      border: 0;
      padding: 0;
      cursor: pointer;
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
