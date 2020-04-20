<template>
    <div class="audioVisualizer fixed">
        <audio>
            <source src='../assets/sounds/sound.mp3'/>
        </audio>
        <button class="audioVisualizer_pause" @click="onClickButton">
            <i v-if="isPlaying" class="material-icons">pause</i>
            <i v-else class="material-icons">play_arrow</i>
        </button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isPlaying: false,
      audioElement: false
    }
  },
  mounted () {
    this.$set(this, 'audioElement', this.$el.querySelector('audio'))
    const playButton = this.$el.querySelector('.audioVisualizer_pause')
    window.addEventListener('mousemove', this.onMouseMove)
  },
  methods: {
    removePlayEvent () {
      window.removeEventListener('mousemove', this.onMouseMove)
    },
    onMouseMove () {
      this.audioElement.play()
      this.$set(this, 'isPlaying', true)
      this.removePlayEvent()
    },
    onClickButton () {
      this.isPlaying ? this.audioElement.pause() : this.audioElement.play()
      this.$set(this, 'isPlaying', !this.isPlaying)
    }
  }
}
</script>
