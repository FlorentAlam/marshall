<template>
    <div class="pause-container fixed">
        <audio>
            <source src='../assets/sounds/sound.mp3'/>
        </audio>
        <div class="pause">
            <i v-if="isPlaying" class="material-icons">pause</i>
            <i v-if="!isPlaying" class="material-icons">play_arrow</i>
        </div>
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
    this.$set(this, 'audioElement', document.querySelector('audio'))
    const playButton = document.querySelector('.pause')
    window.addEventListener('mousemove', this.onMouseMove)
    playButton.addEventListener('click', this.onClickButton)
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

<style lang="scss" scoped>
.pause-container{
    height: 30px;
    width: 30px;
    bottom: 30px;
    right: 30px;
    border-radius: 30px;
    border: 2px solid white;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    transition-duration: .1s;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
    .pause{
        display: flex;
        align-items: center;
        justify-content: center;
        i{
            color: white;
            font-size: 18px;
        }
    }
}
</style>
