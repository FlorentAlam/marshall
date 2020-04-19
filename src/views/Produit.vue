<template>
    <div id="product-page" v-if="produit">
        <div class="image-container">
            <img :src="produit.productPage.mainImage"/>
            <div class="product-name">
              <h1>{{produit.name}}</h1>
              <p>{{produit.description}}</p>
            </div>
        </div>
        <section class="product-description">
          <h1>{{produit.productPage.header1}}</h1>
          <p>{{produit.productPage.desc1}}</p>
          <img :src="produit.productPage.image1"/>
        </section>
        <section class="product-description">
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
      produit: null
    }
  },
  watch: {
    $route (to, from) {
      this.$set(this, 'produit', produits.filter(produit => produit.link === this.$router.currentRoute.params.id)[0])
    }
  },
  mounted () {
    document.addEventListener('scroll', () => {
      this.$el.querySelector('.image-container').style.transform = `translateY(${window.scrollY / 3}px)`
    })
    this.$set(this, 'produit', produits.filter(produit => produit.link === this.$router.currentRoute.params.id)[0])
  }
}
</script>

<style lang="scss" scoped>
    #product-page{
        padding-top: 100px;
        background: #222;
        .image-container{
            height: 100vh;
            display: flex;
            flex-direction: column;
            color: white;
            img{
              width: 80%;
              }
            .product-name{
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              align-items: center;
              h1{
                font-family: arial;
                font-size: 4rem;
                letter-spacing: 3px;
                text-align: center;
              }
              p{
                font-family: roboto;
                font-size: 1rem;
                text-align: justify;
                width: 85%;
              }
            }
        }
        section{
          position: relative;
          z-index: 2;
          background: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          box-sizing: border-box;
          padding: 20px 50px;
          h1{
            font-family: arial;
            font-size: 6vw;
            // font-size: 4rem;
            // letter-spacing: 8px;
            // word-spacing: 30px;
            // margin: 0;
            text-align: center;
          }
          p{
            font-family: roboto;
            font-size: 1.2rem;
            text-align: justify;
          }
          img{
            max-width: 100%;
          }
        }
    }
    @media screen and (min-width: 780px){
      #product-page{
        .image-container{
          flex-direction: row;
          align-items: center;
          // img{
          //   height: 100vh;
          // }
          .product-name{
            padding-right: 50px;
            p{
              width: 100%;
            }
          }
        }
      }
    }
</style>
