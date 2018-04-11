<template lang="pug">
  section.section
    .hotel
      .container
        .hotel__wrapper
          .hotel__about
            .hotel__title Об отеле
            .hotel__info
              .hotel__column
                p.hotel__text
                  | Нашим гостям мы предоставляем уникальное место для отдыха, которое равно пойдет и для подготовки профессиональных спортсменов, для проведения тренировок, тимбилдингов и других мероприятий в горах на высоте 2000 метров.
                p.hotel__text
                  | Основное место спортивной тусовки и отдыха на Эльбрусе – поляны «Азау» и «Чегет» находятся в непосредственной близости от отеля.
              .hotel__column
                p.hotel__text
                  | В 2006 году здесь построили новую гондольную канатную дорогу французской фирмы POMA, идущую в параллель существующей маятниковой. Для проезда к лыжне и канатной дороге организован постоянный трансфер.
          .hotel__pros
            .hotel__pros__item Трансфер
            .hotel__pros__item Ресторан
            .hotel__pros__item Сауна
            .hotel__pros__item Тренажерный зал
            .hotel__pros__item Прокат
            .hotel__pros__item Банкетный зал
            .hotel__pros__item Детская площадка
</template>

<style lang="scss">
@import url('assets/styles/_theme.scss');

  .hotel {
    width: 100%;
    height: 100vh;
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
      background-color: var(--red);
      opacity: .9;
      z-index: 0;
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100vh;
      z-index: 1;
    }
  }

</style>
