<template>
    <ScrollOnView :customClass="'instaCard'">
      <div class="card">
          <div class="owner"><a :href="'https://www.instagram.com/' + instaData.node.owner.username" target="_blank">{{instaData.node.owner.username | capitalize}}</a></div>
          <a :href="'https://www.instagram.com/p/' + instaData.node.shortcode" target="_blank"><img :src="instaData.node.thumbnail_resources[3].src" :alt="instaData.node.accessibility_caption"/></a>
          <div class="likes-container mt-20 mb-20"><span><i class="material-icons">chat_bubble</i><span class="comment_count ml-10"><b>{{instaData.node.edge_media_to_comment.count}}</b></span></span><span><span class="like_count mr-10"><b>{{instaData.node.edge_liked_by.count}}</b></span><i class="material-icons">favorite</i></span></div>
          <p>{{instaData.node.edge_media_to_caption.edges[0].node.text | truncate}}</p>
          <p><small>{{new Date(instaData.node.taken_at_timestamp * 1000).toLocaleDateString()}} {{new Date(instaData.node.taken_at_timestamp * 1000).toLocaleTimeString()}}</small></p>
      </div>
    </ScrollOnView>
</template>

<script>
import ScrollOnView from './ScrollOnView'
export default {
  components: {
    ScrollOnView
  },
  props: {
    instaData: Object,
    instaIndex: Number
  },
  filters: {
    truncate: function (value) {
      if (value.length < 150) return value
      else return value.slice(0, 150) + '...'
    },
    capitalize: function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>
