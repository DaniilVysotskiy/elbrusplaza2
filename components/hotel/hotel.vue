<template lang="pug">
  section.section#hotel
    .hotel.min-height
      .container
        .hotel__wrapper.min-height
          .hotel__about
            h2.hotel__title
              | Об отеле
              .hotel__title--decorative.hatching-white
            .hotel__info
              .hotel__column
                p.hotel__text
                  | Нашим гостям мы предоставляем уникальное место для отдыха, которое равно пойдет и для подготовки профессиональных спортсменов, для проведения тренировок, тимбилдингов и других мероприятий в горах на высоте 2000 метров.
                p.hotel__text
                  | Основное место спортивной тусовки и отдыха на Эльбрусе – поляны «Азау» и «Чегет» находятся в непосредственной близости от отеля.
              .hotel__column
                p.hotel__text
                  | В 2006 году здесь построили новую гондольную канатную дорогу французской фирмы POMA, идущую в параллель существующей маятниковой. Для проезда к лыжне и канатной дороге организован постоянный трансфер.
          .hotel__pros--wrapper
            .container
              ul.hotel__pros
                li.hotel__pros__item
                  img.hotel__pros__img(src="~/assets/icons/transfer.png")
                  span.hotel__pros__text Трансфер
                li.hotel__pros__item
                  img.hotel__pros__img(src="~/assets/icons/restaurant.png")
                  span.hotel__pros__text Ресторан
                li.hotel__pros__item
                  img.hotel__pros__img(src="~/assets/icons/sauna.png")
                  span.hotel__pros__text Сауна
                li.hotel__pros__item
                  img.hotel__pros__img(src="~/assets/icons/gym.png")
                  span.hotel__pros__text Тренажерный зал
                li.hotel__pros__item
                  img.hotel__pros__img(src="~/assets/icons/car.png")
                  span.hotel__pros__text Прокат
                li.hotel__pros__item
                  img.hotel__pros__img(src="~/assets/icons/hall.png")
                  span.hotel__pros__text Банкетный зал
                li.hotel__pros__item
                  img.hotel__pros__img(src="~/assets/icons/playground.png")
                  span.hotel__pros__text Детская площадка
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

<style lang="scss">
  @import './hotel.scss';
</style>
