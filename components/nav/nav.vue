<template lang="pug">
  .nav
    .container
      .nav__wrapper
        .nav__logo
          img.logo(src="")
        .nav__menu.menu
          ul.menu__list
            li.menu__item.menu-item
              a.menu-item__link(href="/") Главная
</template>

<style lang="scss">
  .nav {
    &__wrapper {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
