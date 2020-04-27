<template>
    <div class="scrollOnView" :class="[customClass]">
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    customClass: String
  },
  data () {
    return {
      position: 0,
      bounding: {}
    }
  },
  mounted () {
    this.$set(this, 'bounding', this.$el.getBoundingClientRect())
    this.$set(this, 'position', this.bounding.top + window.scrollY)
    this.onScroll()
    this.addListener()
  },
  destroyed () {
    this.removeListener()
  },
  methods: {
    addListener () {
      window.addEventListener('scroll', this.onScroll)
    },
    removeListener () {
      window.removeEventListener('scroll', this.onScroll)
    },
    onScroll () {
      if (window.scrollY >= (this.position - window.innerHeight)) {
        this.$el.style.transform = 'translateY(0)'
        this.$el.style.opacity = 1
        this.removeListener()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .scrollOnView{
        transition-duration: .4s;
        transition-timing-function: ease-in-out;
        opacity: 0;
    }
</style>
