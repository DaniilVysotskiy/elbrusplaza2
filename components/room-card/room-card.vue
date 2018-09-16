<template lang="pug">
  .room-card
    .room-card__img(:to="'/' + $store.state.locale + '/' + room.code")
      img(:src="'/imgs/rooms/' + room.code + '.jpg'")
    .room-card__info
      .room-card__title.title--decor(:to="'/' + $store.state.locale + '/' + room.code") {{ room.name[currLang] }}
      ul.room-card__params.room-params
        li.room-params__item.item
          .item__title {{ $t('ROOMS.ROOM_CARD.TOTAL_AREA') }}
          .item__value
            span {{ room.area }}
            span {{ $t('ROOMS.ROOM_CARD.AREA_UNIT') }}
            sup 2
        li.room-params__item.item
          .item__title {{ $t('ROOMS.ROOM_CARD.GUESTS_NUMBER') }}
          .item__value
            font-awesome-icon.item__icon(:icon="icon" v-for="n in room.guestsNumber" :key="n")
        li.room-params__item.item
          .item__title {{ $t('ROOMS.ROOM_CARD.COST_PER_NIGHT') }}
          .item__value
            | {{ room.costPerNight | currency($t('ROOMS.ROOM_CARD.CURRENCY'), 0, { thousandsSeparator: ' ', symbolOnLeft: false, spaceBetweenAmountAndSymbol: true }) }}
      //- .room-card__button
      //-   nuxt-link.button.button--orange-outline(:to="'/' + $store.state.locale + '#contacts'" tag="button") {{ $t('ROOMS.BUTTONS.BOOK') }}
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMale } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faMale)

export default {
  props: ['room'],
  data () {
    return {
      currLang: this.$store.state.locale
    }
  },
  methods: {

  },
  computed: {
    icon () {
      return faMale;
    }
  },
  components: {
    FontAwesomeIcon
  }

}
</script>


<style lang="scss">
  
  @import './room-card.scss';
</style>
