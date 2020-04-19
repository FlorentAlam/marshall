<template>
    <div id="popup-container">
    <div class="warning-popup">
        <h1>AVERTISSEMENT</h1>
        <p>Ce site n'est pas lié à Marshall, nous ne vendons pas leurs produits et ne vous fournissons pas toutes les informations que vous pourriez chercher à ce sujet.
            <br/>
            Pour vous rendre sur le site officiel de Marshall, c'est par ici :
            <br/>
            <a href="https://www.marshallheadphones.com/fr/fr/" target="_blank">www.marshallheadphones.com</a>
        </p>
        <button>ça marche</button>
    </div>
    </div>
</template>

<script>
export default {
  mounted () {
    this.$el.addEventListener('click', () => {
      this.$el.style.display = 'none'
    })
  }
}
</script>

<style lang="scss" scoped>
    #popup-container{
        background: #00000066;
        position: fixed;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        z-index: 20;
        display: flex;
        align-items: center;
        justify-content: center;
        .warning-popup{
            background: white;
            padding: 20px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            h1{
                font-family: roboto;
            }
            p{
                font-family: roboto;
                width: 80%;
                text-align: center;
                a{
                    color: blue;
                }
            }
            button{
                background: lightblue;
                border: none;
                font-family: roboto;
                text-transform: uppercase;
                padding: 10px 20px;
                border-radius: 5px;
                font-weight: bold;
                &:hover{
                    box-shadow: 2px 2px 5px 2px #00000011;
                }
            }
        }
    }
</style>
