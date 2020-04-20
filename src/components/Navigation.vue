<template>
    <nav class="pt-30 pl-50 pr-50 fixed navigation" :class="{'navigation--scrolled': isScrolled}">
        <router-link to="/">
            <img :src="isScrolled ? `${publicPath}assets/images/marshall-logo-black.svg` : showMenu ? `${publicPath}assets/images/marshall-logo-black.svg` : `${publicPath}assets/images/marshall-logo.svg`" class="navigation_logo" alt="Marshall logo"/>
        </router-link>
        <button :class="{'navigation_link--black': this.showMenu}" class="bold navigation_link" @click="hideMenu">
            <router-link to="/nos-produits">Nos produits</router-link>
        </button>
        <div :class="{'navigation_menu--show': this.showMenu, 'navigation_menu--hide': !this.showMenu}" class="navigation_menu abs">
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
      produits: null,
      publicPath: process.env.BASE_URL
    }
  },
  mounted () {
    const button = this.$el.querySelector('.navigation_link')
    const menu = this.$el.querySelector('.navigation_menu')
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
