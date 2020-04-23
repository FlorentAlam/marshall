<template>
    <div class="productPage" v-if="produit">
        <div class="productPage_header">
            <img :src="`${publicPath + produit.productPage.mainImage}`"/>
            <div class="productPage_header_name">
              <h1>{{produit.name}}</h1>
              <p>{{produit.description}}</p>
            </div>
        </div>
        <section class="productPage_description">
          <h1>{{produit.productPage.header1}}</h1>
          <p>{{produit.productPage.desc1}}</p>
          <img :src="`${publicPath + produit.productPage.image1}`"/>
        </section>
        <section class="productPage_description">
          <h1>{{produit.productPage.header2}}</h1>
          <p>{{produit.productPage.desc2}}</p>
          <ProduitCaracs :cards="produit.productPage.images"/>
        </section>
    </div>
</template>

<script>
import produits from '../utils/produits'
import ProduitCaracs from '../components/ProduitCaracs'
export default {
  components: {
    ProduitCaracs
  },
  data () {
    return {
      produit: null,
      publicPath: process.env.BASE_URL
    }
  },
  watch: {
    $route (to, from) {
      this.$set(this, 'produit', produits.filter(produit => produit.link === this.$router.currentRoute.params.id)[0])
      document.title = this.produit.name + ' | Marshall'
    }
  },
  mounted () {
    document.addEventListener('scroll', () => {
      this.$el.querySelector('.productPage_header').style.transform = `translateY(${window.scrollY / 3}px)`
    })
    this.$set(this, 'produit', produits.filter(produit => produit.link === this.$router.currentRoute.params.id)[0])
  }
}
</script>
