<template>
    <ScrollOnView :customClass="'product-caracs-images'">
        <div v-for="card in cards" :key="card.link">
            <img :src="`${publicPath + card.link}`"/>
            <h2>{{card.title}}</h2>
            <p>{{card.text}}</p>
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

<style lang="scss" scoped>
.product-caracs-images{
    display: flex;
    flex-direction: column;
    width: 100%;
    div{
        display: flex;
        flex-direction: column;
        // align-items: center;
        // justify-content: center;
        img{
            width: 100%;
        }
        h2{
            text-align: center;
        }
        p{
            text-align: justify;
        }
    }
}

@media screen and (min-width: 500px){
    .product-caracs-images{
        flex-direction: row;
        justify-content: space-between;
        div{
            width: 300px;
        }
    }
}
</style>
