<template>
  <div class="social pb-3">
    <div class="social__arrow social__arrow-left" @click="toLeft"><i class="material-icons">keyboard_arrow_left</i></div>
    <div class="social__arrow social__arrow-right" @click="toRight"><i class="material-icons">keyboard_arrow_right</i></div>
    <h2 class="ml-2 mt-1 mb-1">lâche ton hashtag !</h2>
    <div class="social__feed" :style="{transform: 'translateX(' + currentTranslation + 'px)'}">
      <InstaCard v-for="(data, index) in instaContent" :key="data.node.id" :instaData="data" :instaIndex="index"/>
    </div>
  </div>
</template>

<script>
import InstaCard from './InstaCard'
export default {
  components: {
    InstaCard
  },
  data () {
    return {
      instaContent: null,
      currentTranslation: 0
    }
  },
  mounted () {
    this._getFeed()
    window.addEventListener('resize', () => this.reInitTranslation())
  },
  methods: {
    async _getFeed () {
      const res = await fetch('https://www.instagram.com/marshallheadphones/?__a=1')
      const data = await res.json()
      this.$set(this, 'instaContent', data.graphql.user.edge_owner_to_timeline_media.edges)
    },
    reInitTranslation () {
      this.$set(this, 'currentTranslation', 0)
    },
    toLeft () {
      if (this.currentTranslation < 0) {
        this.$set(this, 'currentTranslation', this.currentTranslation + window.innerWidth)
      }
    },
    toRight () {
      if (this.currentTranslation > (window.innerWidth * -3)) {
        this.$set(this, 'currentTranslation', this.currentTranslation - window.innerWidth)
      }
    }
  }
}
</script>
