<template>
    <ScrollOnView :customClass="'product-caracs'">
        <div v-for="card in cards" :key="card.link" class="product-caracs__card mt-2">
            <img :src="`${publicPath + card.link}`" class="product-caracs__img"/>
            <h3 class="product-caracs__title mt-1">{{card.title}}</h3>
            <p class="product-caracs__description">{{card.text}}</p>
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
