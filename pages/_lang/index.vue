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

<style>
</style>
