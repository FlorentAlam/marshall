<template>
    <div class="produit-container" :class="{left: produit.position === 'left', right: produit.position === 'right'}">
      <img :src="produit.image"/>
        <div class="description-container">
            <div class="description">
                <h2>{{produit.name}}</h2>
                <h3>{{produit.slogan}}</h3>
                <p>{{produit.description}}</p>
                <router-link :to="'/produit/' + produit.link">
                    Plus d'informations
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    produit: Object,
    position: String
  }
}
</script>

<style lang="scss" scoped>
  .produit-container{
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    img{
      width: 50%;
      position: relative;
    }
    .description-container{
      // height: 60%;
      // width: 100%;
      background: rgb(219, 219, 193);
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      // margin: 50px 0;
      .description{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: relative;
        // height: 80%;
        width: 80%;
        padding: 30px 0;
        h2{
          font-size: 2.5rem;
          letter-spacing: 5px;
          text-align: center;
        }
        h3{
          font-size: 1.5rem;
          opacity: .5;
          text-align: center;
        }
        a{
          position: absolute;
          bottom: -20px;
          background: white;
          text-align: center;
          color: black;
          padding: 15px 20px;
          font-weight: bold;
          text-transform: uppercase;
          font-family: roboto;
          transition-duration: .1s;
          cursor: pointer;
          &:hover{
            box-shadow: 2px 2px 5px 2px #00000011;
          }
        }
        p{
          text-align: justify;
        }
      }
    }
  }

  @media screen and (min-width: 500px){
    .produit-container{
      flex-direction: row;
      .description-container{
        .description{
          width: 60%;
        }
      }
      img{
      position: absolute;
      height: 100%;
      transition-duration: .2s;
      transition-timing-function: ease-out;
    }
    }
      .left{
    img{
      left: 0;
      transform: translateX(-200px);
      &:hover{
        transform: translateX(-50px);
      }
    }
    .description{
      position: absolute;
      right: 50px;
      align-items: flex-end;
    }
  }
  .right{
    img{
      right: 0;
      transform: translateX(500px);
      &:hover{
        transform: translateX(150px);
      }
    }
    .description{
      position: absolute;
      left: 50px;
      align-items: flex-start;
    }
  }
  }
</style>
