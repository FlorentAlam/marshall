<template>
  <div class="social pb-50">
    <div class="social_arrow social_arrow_left" @click="toLeft"><i class="material-icons">keyboard_arrow_left</i></div>
    <div class="social_arrow social_arrow_right" @click="toRight"><i class="material-icons">keyboard_arrow_right</i></div>
    <h2 class="ml-30 pt-60 pb-10">lâche ton hashtag !</h2>
    <div class="social_feed" :style="{transform: 'translateX(' + currentTranslation + 'px)'}">
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
    fetch('https://www.instagram.com/marshallheadphones/?__a=1')
      .then(res => res.json())
      .then(data => {
        this.$set(this, 'instaContent', data.graphql.user.edge_owner_to_timeline_media.edges)
      })
    window.addEventListener('resize', () => this.reInitTranslation())
  },
  methods: {
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
