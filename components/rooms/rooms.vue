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
              .rooms__info-column
                p.rooms__text Номерной фонд отеля представлен номерами категории «Standart», «Panorama», «Luxe» и другими, расчитан на 110-120 мест.
              .rooms__info-column
                p.rooms__text.rooms__text--icon.rooms__text--icon--building Каждый номер оснащен современной мебелью и оборудованием, спутниковым телевидением, на всей территории отеля доступен высокоскоростной интернет, имеется ресторан, караоке-бар, оздоровительный комплекс (сауна), фитнесс-центр, хранилище для снаряжения, вблизи расположен закрытый спортивный зал.
                br
                p.rooms__text.rooms__text--icon.rooms__text--icon--clerk Для корпоративных клиентов предусмотрены специальные предложения и система скидок.
              .rooms__info-column
                form.rooms__schedule.schedule
                  h3.schedule__title Когда вы хотите нас посетить?
                  small.schedule__hint Проверьте наличие номеров на интересующие вас даты
                  .schedule__group
                    input.schedule__date(type="date" placeholder="Дата заезда")
                    input.schedule__date(type="date" placeholder="Дата выезда")
                  .schedule__group
                    button.schedule__reset(type="reset") Сбросить фильтр
                    button.schedule__submit(type="submit") Применить

      .rooms__body
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
    &__info-column {
      flex: 1 1 33.33%;
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
      &__date {}
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
      &__submit {
        border: 1px solid white;
        background-color: transparent;
        color: white;
        font-family: Selina;
        font-size: 1rem;
        font-weight: 400;
        padding: 8px;
      }
    }
  }

</style>
