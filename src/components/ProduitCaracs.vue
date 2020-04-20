<template>
    <ScrollOnView :customClass="'productCaracs'">
        <div v-for="card in cards" :key="card.link" class="productCaracs_card">
            <img :src="`${publicPath + card.link}`" class="productCaracs_card_img"/>
            <h2 class="productCaracs_card_title">{{card.title}}</h2>
            <p class="produtCaracs_card_description">{{card.text}}</p>
        </div>
    </ScrollOnView>
</template>

<script>
import ScrollOnView from './ScrollOnView'
export default {
  components: {
    ScrollOnView
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  props: {
    cards: Array
  }
}
</script>
