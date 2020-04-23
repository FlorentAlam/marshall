<template>
    <ScrollOnView :customClass="'productCaracs'">
        <div v-for="card in cards" :key="card.link" class="productCaracs_card mt-20">
            <img :src="`${publicPath + card.link}`" class="productCaracs_card_img"/>
            <h3 class="productCaracs_card_title mt-10">{{card.title}}</h3>
            <p class="productCaracs_card_description">{{card.text}}</p>
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
