<template lang="pug">
  section.section#reviews
    .reviews
      .reviews__bg
      .reviews__wrapper
        .container
          .reviews__content
            .reviews__header
              h2.reviews__title
                  | {{ $t('REVIEWS.TITLE') }}
                  .reviews__title--decorative.hatching-white
              button.button.button--orange-filled(disabled) {{ $t('REVIEWS.LEAVE_FEEDBACK') }}
            .reviews__body
              .reviews__container
                .reviews__item.item
                  h3.item__title Спасибо за отдых
                  .item__header
                    .item__check-in
                      | Дата заезда:&nbsp;
                      span 3 января 2018
                    .item__room
                      | Номер в отеле:&nbsp;
                      span «Standart»
                  .item__body
                    .item__text Прекрасный отель, чистый, уютный, предусмотрены интересы и для взрослых и для детей. Приветливый коллектив, очень разнообразный Швецкий стол. Территория красивая, ухоженная. Вкус у хозяев отменный. Спасибо за отдых.
                .reviews__item.item
                  h3.item__title Супер!
                  .item__header
                    .item__check-in
                      | Дата заезда:&nbsp;
                      span 10 февраля 2018
                    .item__room
                      | Номер в отеле:&nbsp;
                      span «Семейный»
                  .item__body
                    .item__text Первый раз в Приэльбрусье! Необыкновенный отель! Чистые, уютные номера! Девочка на ресепшене очень вежливая, профессионально подходит к решению любого вопроса! Повару отдельное спасибо за душевные завтраки и ужины. Территория отеля чистая и ухоженная, деткам есть где порезвиться пока родители катаются! Спасибо за гостеприимство вернемся к Вам обязательно!
                .reviews__item.item
                  h3.item__title Замечательно отдохнули!
                  .item__header
                    .item__check-in
                      | Дата заезда:&nbsp;
                      span 5 марта 2018
                    .item__room
                      | Номер в отеле:&nbsp;
                      span «Grand Luxe»
                  .item__body
                    .item__text Даже трудно описать словами то впечатление, которое возникало каждый день! Благодарность, восторг, благополучие! В каждом кусочке двора, в каждой комнате, в ресторане. Так заботливо нас принимает атмосфера. Дух сердец руководителей, создателей этого пространства отражается во встречной улыбке сотрудников. Нам здесь рады. Нас любят. Нас хотят видеть снова. Спасибо просто огромное. Нас было 9 человек из Пятигорска и из Москвы. Все счастливы! Мы великолепно провели свой отдых.


</template>

<style lang="scss" >
  
  @import './reviews.scss';
</style>
