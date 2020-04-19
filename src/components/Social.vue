<template>
  <div class="social-container pb-50">
    <div class="arrow arrow-left" @click="toLeft"><i class="material-icons">keyboard_arrow_left</i></div>
    <div class="arrow arrow-right" @click="toRight"><i class="material-icons">keyboard_arrow_right</i></div>
    <h2 class="ml-30 pt-60 pb-10">lâche ton hashtag !</h2>
    <div id="feed" :style="{transform: 'translateX(' + currentTranslation + 'px)'}">
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
  },
  methods: {
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
