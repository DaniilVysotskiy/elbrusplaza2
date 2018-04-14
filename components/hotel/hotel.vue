<template lang="pug">
  section.section#hotel
    .hotel
      .container
        .hotel__wrapper
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

<style lang="scss">
@import url('assets/styles/_theme.scss');

  .hotel {
    width: 100%;
    height: 100vh;
    min-height: 600px;
    position: relative;
    background-image: url(~/assets/imgs/hotel-bg.jpg);
    background-size: cover;
    background-position: center;
    z-index: 0;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--brand);
      opacity: .9;
      z-index: -1;
    }
    &__wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100vh;
      min-height: 600px;
      z-index: 1;
    }
    &__about {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    &__title {
      position: relative;
      display: inline-block;
      font-size: 45px;
      font-family: 'ThamesC';
      font-style: italic;
      font-weight: normal;
      text-transform: uppercase;
      color: white;
      padding: 0 20px;
      padding-bottom: 10px;
      &--decorative {
        position: absolute;
        top: 0;
        left: 0;
        width: 8px;
        height: 100%;
      }
    }
    &__info {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      background-color: white;
      padding: 20px;
      &::after {
        position: absolute;
        content: '';
        display: block;
        top: -80px;
        right: -80px;
        width:211px;
        height: 172px;
        background-image: url('~/assets/imgs/about-decorative-element.png');
        z-index: -1;
      }
    }
    &__column {
      flex: 1 1 auto;
      max-width: 400px;
      & + & {
        margin-left: 3rem;
      }
    }
    &__text {
      font-size: 1rem;
      line-height:1.2rem;
      & + & {
        margin-top: 1rem;
      }
    }
    &__pros {
      position: relative;
      list-style: none;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: flex-end;
      justify-self: flex-end;
      align-self: flex-start;
      padding: 0;
      margin: -20px;
      &--wrapper {
        position: absolute;
        bottom: 2rem;
        left: 0;
        width: 100%;
      }
      &__item {
        display: flex;
        flex-direction: column;
        margin: 20px;
        text-align: center;
        text-align: center;
      }
      &__img {
        display: block;
        margin: 0 auto;
        margin-bottom: 1rem;
      }
      &__text {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.2rem;
        color: var(--yellow);
        max-width: 100px;
        height: 50px;
      }
    }
  }
  .hatching-white {
    background: repeating-linear-gradient(-30deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 3px, white 3px, white 4px);
    background-repeat: repeat;
  }

</style>
