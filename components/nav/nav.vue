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
              nuxt-link.menu-item__link.menu-item__link--hotel(to="#hotel" active-class="active") {{ $t('links.hotel') }}
            li.menu__item.menu-item
              nuxt-link.menu-item__link.menu-item__link--rooms(to="#rooms" active-class="active") {{ $t('links.rooms') }}
            li.menu__item.menu-item
              nuxt-link.menu-item__link.menu-item__link--reviews(to="#reviews" active-class="active") {{ $t('links.reviews') }}
            li.menu__item.menu-item
              nuxt-link.menu-item__link.menu-item__link--contacts(to="#contacts" active-class="active") {{ $t('links.contacts') }}
          ul.menu__lang
            li.menu__lang-item
              nuxt-link.menu__lang-button(to="/ru" active-class="active" @click="setLang('ru')") RU
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
  @import './nav.scss';
</style>
