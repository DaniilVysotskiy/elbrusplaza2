<template lang="pug">
  div.room
    navigation
    roomHeader(:room="room")
    //- roomBody
    pre {{ room }}
    myFooter
</template>

<script>
import navigation from '~/components/nav/nav.vue'
import roomHeader from '~/components/room-header/room-header.vue'
// import roomBody from '~/components/room-body/room-body.vue'
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
    roomHeader,
    myFooter
  }
}
</script>

<style lang="scss">
  .room {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
