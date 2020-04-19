<template>
    <div class="scrollOnView-container" :class="[customClass]">
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    customClass: String
  },
  mounted () {
    const bounding = this.$el.getBoundingClientRect()
    const positionFromTop = bounding.top + window.scrollY
    this.$el.style.transform = `translateY(${bounding.height / 2}px)`
    window.addEventListener('scroll', () => {
      if (window.scrollY >= (positionFromTop - window.innerHeight / 2)) {
        this.$el.style.transform = 'translateY(0)'
        this.$el.style.opacity = 1
      }
    })
  }
}
</script>

<style lang="scss" scoped>
    .scrollOnView-container{
        transition-duration: .4s;
        transition-timing-function: ease-in-out;
        opacity: 0;
    }
</style>
