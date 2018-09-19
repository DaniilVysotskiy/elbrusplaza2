<template lang="pug">
  div.room
    navigation
    hotel
    no-ssr
      pre {{ room }}
    myFooter
</template>

<script>
import navigation from '~/components/nav/nav.vue'
import hotel from '~/components/hotel/hotel.vue'
import myFooter from '~/components/my-footer/my-footer.vue'

export default {
  data() {
    return {
      room: {}
    }
  },
  methods: {
    fetchRoom: async function() {
      try {
        await this.$store.dispatch('fetchRoom', {
          type: this.$route.params.type
        });

        this.room = this.$store.state.room;
      } catch (e) {
        new Error({ message: 'Room not found', statusCode: 404 })
      }
    }
  },
  mounted() {
    this.fetchRoom();
  },
  components: {
    navigation,
    hotel,
    myFooter
  }
}
</script>

<style lang="scss">
</style>
