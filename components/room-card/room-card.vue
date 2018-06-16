<template lang="pug">
  .room-card
    .room-card__img.my-column
      img(src="")
    .room-card__info.my-column
      .room-card__title Standart
      ul.room-card__params.room-params
        li.room-params__item.item
          .item__title Общая площадь
          .item__value
            | 40 м
            sup 2
        li.room-params__item.item
          .item__title Число гостей
          .item__value
            font-awesome-icon(:icon="icon")
        li.room-params__item.item
          .item__title Цена за ночь
          .item__value
            | {{ '5000' | currency('руб.', 0, { thousandsSeparator: ' ', symbolOnLeft: false, spaceBetweenAmountAndSymbol: true }) }}
      .room-card__button
        nuxt-link.button.button--orange-outline(to="/room") Подробнее
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faMale from '@fortawesome/fontawesome-free-solid/faMale'

export default {
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {
    icon () {
      return faMale
    }
  },
  components: {
    FontAwesomeIcon
  }

}
</script>


<style lang="scss" scoped>
  @import './room-card.scss';
</style>
