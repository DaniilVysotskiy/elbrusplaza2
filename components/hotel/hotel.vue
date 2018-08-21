<template lang="pug">
  section.section#hotel
    .hotel.min-height
      .container
        .hotel__wrapper.min-height
          .hotel__about
            h2.hotel__title
              | {{ $t('HOTEL.TITLE') }}
              .hotel__title--decorative.hatching-white
            .hotel__info
              .hotel__column
                p.hotel__text
                  | {{ $t('HOTEL.TEXT_1') }}
                p.hotel__text
                  | {{ $t('HOTEL.TEXT_2') }}
              .hotel__column
                p.hotel__text
                  | {{ $t('HOTEL.TEXT_3') }}
          .hotel__pros--wrapper
            .container
              ul.hotel__pros
                li.hotel__pros__item
                  img.hotel__pros__img(src="~/assets/icons/transfer.png")
                  span.hotel__pros__text {{ $t('HOTEL.PROS.TRANSFER') }}
                li.hotel__pros__item
                  img.hotel__pros__img(src="~/assets/icons/restaurant.png")
                  span.hotel__pros__text {{ $t('HOTEL.PROS.RESTAURANT') }}
                li.hotel__pros__item
                  img.hotel__pros__img(src="~/assets/icons/sauna.png")
                  span.hotel__pros__text {{ $t('HOTEL.PROS.SAUNA') }}
                li.hotel__pros__item
                  img.hotel__pros__img(src="~/assets/icons/gym.png")
                  span.hotel__pros__text {{ $t('HOTEL.PROS.GYM') }}
                li.hotel__pros__item
                  img.hotel__pros__img(src="~/assets/icons/car.png")
                  span.hotel__pros__text {{ $t('HOTEL.PROS.RENT') }}
                li.hotel__pros__item
                  img.hotel__pros__img(src="~/assets/icons/hall.png")
                  span.hotel__pros__text {{ $t('HOTEL.PROS.BANQUETING_HALL') }}
                li.hotel__pros__item
                  img.hotel__pros__img(src="~/assets/icons/playground.png")
                  span.hotel__pros__text {{ $t('HOTEL.PROS.PLAYGROUND') }}
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" >
  
  @import './hotel.scss';
</style>
