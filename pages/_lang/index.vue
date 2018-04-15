<template lang="pug">
  div
    navigation
    hero
    hotel
    rooms
    reviews
    myVideo
    contacts
    myFooter
</template>

<script>
import navigation from '~/components/nav/nav.vue'
import hero from '~/components/hero/hero.vue'
import hotel from '~/components/hotel/hotel.vue'
import rooms from '~/components/rooms/rooms.vue'
import reviews from '~/components/reviews/reviews.vue'
import myVideo from '~/components/my-video/my-video.vue'
import contacts from '~/components/contacts/contacts.vue'
import myFooter from '~/components/my-footer/my-footer.vue'

export default {
  components: {
    navigation,
    hero,
    hotel,
    rooms,
    reviews,
    myVideo,
    contacts,
    myFooter
  }
}
</script>

<style lang="scss">
.container {
  flex: 1 1 100;
  max-width: 1170px;
  height: 100%;
  padding: 0 15px;
  margin: 0 auto;
}
.section {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
  @media screen and (min-width: 1367px) {
    .container {
      max-width: 1170px;
    }
  }

  @media screen and (max-width: 1366px) {
    .container {
      max-width: 1000px;
    }
  }
</style>
