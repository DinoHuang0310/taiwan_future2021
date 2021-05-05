<template>
  <youtube :video-id="videoId" :ref="videoId" />
</template>

<script>
export default {
  name: 'YoutubePlayer',
  props: {
    videoId: {
      type: String,
      required: true
    },
    active: {
      type: String,
      required: true
    }
  },
  computed: {
    player() {
      return this.$refs[this.videoId].player;
    }
  },
  watch: {
    active(activeId) {
      // 比對當前播放的ID, 若非自己則將自己停播
      if(activeId != this.videoId) this.player.pauseVideo();
    }
  },
  methods: {
    youtubStateChange(youtubeState) {
      // 播放時將自己的ID傳出, 由父組件設定成當前播放
      if(youtubeState.data === 1) this.$emit('setActiveVideo', this.videoId);
    }
  },
  mounted() {
    this.player.addEventListener('onStateChange', this.youtubStateChange);
  }
}
</script>
