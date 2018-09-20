<template lang="pug">
  .room-header
    .room-header__bg(:style="{ backgroundImage: imageUrl }")
    .container
      .room-header__wrapper
        pre {{ room.code }}
</template>

<script>
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faMale } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// library.add(faMale)

export default {
  props: ['room'],
  data () {
    return {
      currentLang: this.$store.state.locale
    }
  },
  methods: {

  },
  computed: {
    imageUrl() {
      if (this.room.code !== undefined) {
        return `url('/imgs/rooms/${this.room.code}.jpg')`;
      }
    }
    // icon () {
    //   return faMale;
    // }
  },
  components: {
    // FontAwesomeIcon
  }

}
</script>


<style lang="scss">

  @import './room-header.scss';
</style>
