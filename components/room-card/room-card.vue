<template lang="pug">
  .room-card
    nuxt-link.room-card__img(to="/room" tag="a")
      img(src="")
    .room-card__info
      nuxt-link.room-card__title.title--decor(to="/room") Standart
      ul.room-card__params.room-params
        li.room-params__item.item
          .item__title {{ $t('ROOMS.ROOM_CARD.AREA') }}
          .item__value
            span 40
            span {{ $t('ROOMS.ROOM_CARD.AREA_UNIT') }}
            sup 2
        li.room-params__item.item
          .item__title {{ $t('ROOMS.ROOM_CARD.GUESTS_NUMBER') }}
          .item__value
            font-awesome-icon(:icon="icon")
        li.room-params__item.item
          .item__title {{ $t('ROOMS.ROOM_CARD.COST_PER_NIGHT') }}
          .item__value
            | {{ '5000' | currency($t('ROOMS.ROOM_CARD.CURRENCY'), 0, { thousandsSeparator: ' ', symbolOnLeft: false, spaceBetweenAmountAndSymbol: true }) }}
      .room-card__button
        nuxt-link.button.button--orange-outline(to="/room" tag="button") {{ $t('ROOMS.BUTTONS.MORE') }}
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMale } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMale)

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


<style lang="scss">
  @import '../../assets/styles/_variables.scss';
  @import './room-card.scss';
</style>
