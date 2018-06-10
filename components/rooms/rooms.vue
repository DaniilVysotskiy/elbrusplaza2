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
          .rooms__card.room-card
            img.room-card__img.my-column(src="")
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

<style lang="scss">
@import url('assets/styles/_theme.scss');

  .rooms {
    flex: 1 1 auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    &__header {
      position: relative;
      width: 100%;
      height: 600px;
      background-image: url(~/assets/imgs/rooms-bg.jpg);
      background-size: cover;
      background-position: center;
      z-index: 0;
      color: white;
      overflow-x: hidden;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--orange);
        opacity: .9;
        z-index: -1;
      }
      &--wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100%;
        height: 100%;
        z-index: 1;
        padding-bottom: 3rem;
      }
    }
    &__body {
      width: 100%;
      min-height: 600px;
    }
    &__title {
      position: relative;
      display: inline-block;
      font-size: 45px;
      font-family: 'ThamesC';
      font-style: italic;
      font-weight: normal;
      text-transform: uppercase;
      color: var(--yellow);
      padding: 0 20px;
      &--decorative {
        position: absolute;
        top: 0;
        left: 0;
        width: 8px;
        height: 100%;
      }
    }
    &__info {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 2rem;
    }
    &__text {
      position: relative;
      margin-top: 1rem;
      padding-left: 1rem;
      padding-right: 2rem;
      font-size: 1rem;
      &--icon {
        padding-left: 3rem;
        &--building,
        &--clerk {
          &::before {
            content: '';
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        &--building::before {
          width: 21px;
          height: 39px;
          background-image: url('~/assets/icons/building.png');
        }
        &--clerk::before {
          width: 21px;
          height: 30px;
          background-image: url('~/assets/icons/clerk.png');
        }
      }
    }
    .my-column {
      flex: 1 1 33.33%;
      max-width: 33.33%;
    }
    .schedule {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      height: 260px;
      padding: 1rem 0;
      padding-left: 2rem;
      &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        border: 1px solid var(--yellow);
      }
      &__title {
        position: relative;
        display: inline-block;
        font-size: 20px;
        font-family: 'ThamesC';
        font-style: italic;
        font-weight: normal;
        text-transform: uppercase;
        color: var(--yellow);
        margin-bottom: 1rem;
      }
      &__hint {
        margin-bottom: 2rem;
      }
      &__group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
      }
      // &__date {}
      &__reset {
        border: 0;
        background-color: transparent;
        color: white;
        text-decoration: underline;
        font-family: Selina;
        font-size: 1rem;
        font-style: italic;
        font-weight: 400;
      }
      // &__submit {}
    }
  }

</style>
