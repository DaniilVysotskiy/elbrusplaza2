<template lang="pug">
  .nav
    .container
      .nav__wrapper
        .nav__logo
          a.logo__wrapper(href="/")
            img.logo(:src="changeLogoOnScroll")
        .nav__menu.menu#menu
          .menu__buttons
            a.menu__button.menu__button--open(href="#menu") ☰
            a.menu__button.menu__button--close(href="#_") ⨯
          div.menu-toggle
            ul.menu__list
              li.menu__item.menu-item
                nuxt-link.menu-item__link.menu-item__link--hotel(to="#hotel" active-class="active") {{ $t('LINKS.HOTEL') }}
              li.menu__item.menu-item
                nuxt-link.menu-item__link.menu-item__link--rooms(to="#rooms" active-class="active") {{ $t('LINKS.ROOMS') }}
              li.menu__item.menu-item
                nuxt-link.menu-item__link.menu-item__link--reviews(to="#reviews" active-class="active") {{ $t('LINKS.REVIEWS') }}
              li.menu__item.menu-item
                nuxt-link.menu-item__link.menu-item__link--video(to="#my-video" active-class="active") {{ $t('LINKS.VIDEO') }}
              li.menu__item.menu-item
                nuxt-link.menu-item__link.menu-item__link--contacts(to="#contacts" active-class="active") {{ $t('LINKS.CONTACTS') }}
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
    },
    setLang(lang) {
      this.$store.commit('SET_LANG', lang);
    },
    toggleMenu() {
      console.log('menu button clicked!');
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
  mounted() {
    this.isTopOfPage = window.scrollY > 1 ? false : true;
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
