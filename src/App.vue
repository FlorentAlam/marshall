<template>
  <div id="app">
    <!-- <Warning/> -->
    <Navigation/>
    <transition name="fade">
      <router-view/>
    </transition>
    <AudioVisualizer/>
    <Footer/>
  </div>
</template>

<script>
import AudioVisualizer from './components/AudioVisualizer'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
// import Warning from './components/Warning'

export default {
  components: {
    Navigation,
    AudioVisualizer,
    Footer
    // Warning
  },
  watch: {
    $route (to, from) {
      document.title = to.meta.title || 'Marshall'
    }
  }
}
</script>

<style lang="scss">

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
