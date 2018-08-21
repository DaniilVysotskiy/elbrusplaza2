<template lang="pug">
  section.section#my-video
    .my-video.min-height
      no-ssr
        youtube(:video-id="videoId" player-width="100%" player-height="100%" :player-vars="{start: 0, autoplay: 0, showInfo: false}")
</template>

<script>
import Vue from 'vue';
import VueYouTubeEmbed from '../../node_modules/vue-youtube-embed/lib/vue-youtube-embed';

Vue.use(VueYouTubeEmbed);

export default {
  data () {
    return {
      videoId: 's7VbsrwQytc'
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss" >

  @import './my-video.scss';

</style>
