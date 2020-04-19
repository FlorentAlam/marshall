<template>
    <nav class="pt-30 pl-50 pr-50 fixed" :class="{windowScrolled: isScrolled}">
        <router-link to="/"><img :src="isScrolled ? '../assets/images/marshall-logo-black.svg' : showMenu ? '../assets/images/marshall-logo-black.svg' : '../assets/images/marshall-logo.svg'" class="logo" alt="Marshall logo"/></router-link>
        <button :class="{colBlack: this.showMenu}" class="bold" @click="hideMenu"><router-link to="/nos-produits">Nos produits</router-link></button>
        <div id="menu" :class="{showMenu: this.showMenu, hideMenu: !this.showMenu}" class="abs">
            <router-link v-for="produit in produits" :key="produit.link" :to="'/produit/' + produit.link">
                <img :src="produit.image" :alt="produit.name" @click="hideMenu"/>
            </router-link>
        </div>
    </nav>
</template>

<script>
import produits from '../utils/produits'
export default {
  data () {
    return {
      showMenu: false,
      isScrolled: false,
      produits: null
    }
  },
  mounted () {
    const button = document.getElementsByTagName('button')[0]
    const menu = document.getElementById('menu')
    this.$set(this, 'produits', produits)
    button.addEventListener('mouseenter', () => {
      this.$set(this, 'showMenu', true)
    })
    menu.addEventListener('mouseleave', () => {
      this.hideMenu()
    })
    window.addEventListener('scroll', () => {
      this.$set(this, 'isScrolled', window.scrollY > window.innerHeight)
    })
  },
  methods: {
    hideMenu () {
      this.$set(this, 'showMenu', false)
    }
  }
}
</script>
