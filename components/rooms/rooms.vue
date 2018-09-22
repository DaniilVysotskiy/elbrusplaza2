<template lang="pug">
  section.section#rooms
    .rooms.min-height
      .rooms__header
        .container
          .rooms__header--wrapper
            h2.rooms__title
              | {{ $t('ROOMS.TITLE') }}
              .decorative-element.hatching-yellow
            .rooms__info
              .my-column
                p.rooms__text {{ $t('ROOMS.TEXT_1') }}
              .my-column
                p.rooms__text.rooms__text--icon.rooms__text--icon--building {{ $t('ROOMS.TEXT_2') }}
                br
                p.rooms__text.rooms__text--icon.rooms__text--icon--clerk {{ $t('ROOMS.TEXT_3') }}
              .my-column
                form.rooms__schedule.schedule
                  h3.schedule__title {{ $t('ROOMS.SCHEDULE_TITLE') }}
                  small.schedule__hint {{ $t('ROOMS.SCHEDULE_NOTICE') }}
                  .schedule__group
                    no-ssr
                      date-picker(v-model="scheduleTime" range :placeholder="$t('ROOMS.SCHEDULE_SELECT_DATES')" :lang="currLang" :not-before="notBefore" disabled)
                  .schedule__group
                    button.schedule__reset(type="reset" disabled) {{ $t('ROOMS.BUTTONS.RESET_FILTER') }}
                    button.button.button--white-outline.schedule__submit(type="submit" disabled) {{ $t('ROOMS.BUTTONS.SUBMIT') }}

      .rooms__body
        img.decorative-element-left(src="~/assets/imgs/rooms_decor_left.png")
        img.decorative-element-right(src="~/assets/imgs/rooms_decor_right.png")
        .container
          .decorative-element.hatching-orange
          roomCard.rooms__card(v-for="(room, index) in rooms" :key="index" :room="room")
</template>

<script>
// import axios from 'axios';
import roomCard from '~/components/room-card/room-card.vue';

export default {
  data() {
    return {
      scheduleTime: '',
      currLang: this.$store.state.locale,
      notBefore: new Date(),
      rooms: [
        {
          "name": { "ru":"Standart", "en": "Standart"},
          "area": 40,
          "guestsNumber": 2,
          "costPerNight": 5000,
          "previewImg": "",
          "code": "standart"
        },
        {
          "name": { "ru":"Standart+", "en": "Standart+"},
          "area": 40,
          "guestsNumber": 2,
          "costPerNight": 6000,
          "previewImg": "",
          "code": "standart-plus"
        },
        {
          "name": { "ru":"Panorama", "en": "Panorama"},
          "area": 50,
          "guestsNumber": 2,
          "costPerNight": 7000,
          "previewImg": "",
          "code": "panorama"
        },
        {
          "name": { "ru":"Luxe 2-х комнатный", "en": "Luxe 2 rooms"},
          "area": 50,
          "guestsNumber": 2,
          "costPerNight": 7000,
          "previewImg": "",
          "code": "luxe-2-rooms"
        },
        {
          "name": { "ru":"Grand Luxe", "en": "Grand Luxe"},
          "area": 80,
          "guestsNumber": 3,
          "costPerNight": 8500,
          "previewImg": "",
          "code": "grand-luxe"
        },
        {
          "name": { "ru":"Luxe 2-х двухуровневый", "en": "Luxe 2 floors"},
          "area": 80,
          "guestsNumber": 4,
          "costPerNight": 10000,
          "previewImg": "",
          "code": "luxe-2-floors"
        },
        {
          "name": { "ru":"Family", "en": "Family"},
          "area": 100,
          "guestsNumber": 4,
          "costPerNight": 14000,
          "previewImg": "",
          "code": "family"
        }
      ]
    }
  },
  methods: {

  },
  computed: {

  },
  components: {
    roomCard
  },
  created() {
    this.$store.dispatch('fetchRooms');
  }

}
</script>

<style lang="scss" >
  @import './rooms.scss';
</style>
