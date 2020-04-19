<template>
  <div class="produits">
    <h1>Nos Produits</h1>
    <Produit v-for="produit in produits" :produit="produit" :key="produit.link"/>
  </div>
</template>

<script>
import produits from '../utils/produits'
import Produit from '../components/Produit'
export default {
  components: {
    Produit
  },
  data () {
    return {
      produits
    }
  },
  mounted () {
    this.$set(this, 'produits', produits)
  }
}
</script>

<style lang="scss" scoped>
.produits{
  position: relative;
  h1{
    text-align: center;
    font-family: roboto;
    text-transform: uppercase;
    font-size: 3rem;
    margin: 0;
    margin-top: 100px;
    color: white;
  }
  .scrolling-container{
    position: fixed;
    right: 10px;
    z-index: 19;
    top: calc(50% - 30px);
    display: flex;
    flex-direction: column;
    width: 15px;
  }
}
</style>
