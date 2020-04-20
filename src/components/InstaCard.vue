<template>
    <ScrollOnView :customClass="'instagram mt-30'">
      <div class="instagram_card">
          <div class="instagram_card_owner">
              <a :href="'https://www.instagram.com/' + instaData.node.owner.username" target="_blank">{{instaData.node.owner.username | capitalize}}</a>
          </div>
          <a :href="'https://www.instagram.com/p/' + instaData.node.shortcode" target="_blank">
              <img class="instagram_card_image" :src="instaData.node.thumbnail_resources[3].src" :alt="instaData.node.accessibility_caption"/>
          </a>
          <div class="instagram_card_reactions mt-20 mb-20">
              <span>
                  <i class="material-icons">chat_bubble</i>
                  <span class="instagram_card_reactions_comments ml-10">
                      <b>{{instaData.node.edge_media_to_comment.count}}</b>
                  </span>
              </span>
              <span>
                  <span class="instagram_card_reactions_likes mr-10">
                      <b>{{instaData.node.edge_liked_by.count}}</b>
                  </span>
                  <i class="material-icons">favorite</i>
              </span>
          </div>
          <p class="instagram_card_text">{{instaData.node.edge_media_to_caption.edges[0].node.text | truncate}}</p>
          <p>
              <small>{{new Date(instaData.node.taken_at_timestamp * 1000).toLocaleDateString()}} {{new Date(instaData.node.taken_at_timestamp * 1000).toLocaleTimeString()}}</small>
          </p>
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
