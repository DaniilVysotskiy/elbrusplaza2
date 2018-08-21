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
          roomCard.rooms__card(v-for="(room, index) in $store.state.roomsList" :key="index" :room="room")
</template>

<script>
// import axios from 'axios';
import roomCard from '~/components/room-card/room-card.vue';

export default {
  data() {
    return {
      scheduleTime: '',
      currLang: this.$store.state.locale,
      notBefore: new Date()
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
