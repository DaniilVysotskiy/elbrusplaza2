<template lang="pug">
  section.section#rooms
    .rooms.min-height
      .rooms__header
        .container
          .rooms__header--wrapper
            h2.rooms__title
              | Номера
              .hotel__title--decorative.hatching-yellow
            .rooms__info
              .my-column
                p.rooms__text Номерной фонд отеля представлен номерами категории «Standart», «Panorama», «Luxe» и другими, расчитан на 110-120 мест.
              .my-column
                p.rooms__text.rooms__text--icon.rooms__text--icon--building Каждый номер оснащен современной мебелью и оборудованием, спутниковым телевидением, на всей территории отеля доступен высокоскоростной интернет, имеется ресторан, караоке-бар, оздоровительный комплекс (сауна), фитнесс-центр, хранилище для снаряжения, вблизи расположен закрытый спортивный зал.
                br
                p.rooms__text.rooms__text--icon.rooms__text--icon--clerk Для корпоративных клиентов предусмотрены специальные предложения и система скидок.
              .my-column
                form.rooms__schedule.schedule
                  h3.schedule__title Когда вы хотите нас посетить?
                  small.schedule__hint Проверьте наличие номеров на интересующие вас даты
                  .schedule__group
                    input.schedule__date(type="date" placeholder="Дата заезда")
                    input.schedule__date(type="date" placeholder="Дата выезда")
                  .schedule__group
                    button.schedule__reset(type="reset") Сбросить фильтр
                    button.button.button--white-outline.schedule__submit(type="submit") Применить

      .rooms__body
        .container
          roomCard.rooms__card
</template>

<script>
import roomCard from '~/components/room-card/room-card.vue'

export default {
  data () {
    return {

    }
  },
  methods: {

  },
  computed: {

  },
  components: {
    roomCard
  }

}
</script>

<style lang="scss" scoped>
  @import './rooms.scss';
</style>
