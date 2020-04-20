<template>
    <header class="header">
        <div class="header_top">
            <span class="green-channel opa-4"><b>RESSENTEZ LA</b></span>
            <span class="pink-channel opa-4"><b>RESSENTEZ LA</b></span>
            <span class="basic"><b>RESSENTEZ LA</b></span>
        </div>
        <div class="header_bottom">
            <span class="green-channel opa-4"><b>PUISSANCE</b></span>
            <span class="pink-channel opa-4"><b>PUISSANCE</b></span>
            <span class="basic"><b>PUISSANCE</b></span>
        </div>
    </header>
</template>

<script>
export default {
  data () {
    return {
      blinking: false,
      time: new Date().getTime(),
      randDelay: Math.floor(Math.random() * 1500),
      green: null,
      pink: null,
      basic: null
    }
  },
  mounted () {
    this.initData()
    // Desactiver l'animation si l'utilisateur y est trop sensible
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.animate()
    }
    const bottom = this.$el.querySelector('.header_bottom')
    document.addEventListener('mousemove', (event) => {
      bottom.style.transform = `translateX(${-(event.clientX - window.innerWidth / 2) / 50}px) translateY(${-(event.clientY - window.innerHeight / 2) / 50}px)`
    })
    document.addEventListener('scroll', () => {
      this.$el.style.transform = `translateY(${window.scrollY / 3}px)`
    })
  },
  methods: {
    initData () {
      this.$set(this, 'green', this.$el.getElementsByClassName('green-channel'))
      this.$set(this, 'pink', this.$el.getElementsByClassName('pink-channel'))
      this.$set(this, 'basic', this.$el.getElementsByClassName('basic'))
    },
    onBlink () {
      if (this.blinking) {
        const value = Math.floor(Math.random() * 15) + 1
        for (let i = 0; i < this.green.length; i++) {
          this.green[i].style.transform = `translateX(${value}px)`
          this.pink[i].style.transform = `translateX(-${value}px)`
          this.basic[i].style.transform = `translateX(${value / 2}px)`
        }
      } else {
        for (let i = 0; i < this.green.length; i++) {
          this.green[i].style.transform = 'translateX(0)'
          this.pink[i].style.transform = 'translateX(0)'
          this.basic[i].style.transform = 'translateX(0)'
        }
      }
      this.$set(this, 'blinking', !this.blinking)
    },
    animate () {
      const currTime = new Date().getTime()
      if (currTime - this.time > this.randDelay) {
        this.onBlink()
        this.$set(this, 'time', currTime)
        this.$set(this, 'randDelay', (!this.blinking ? Math.floor(Math.random() * 200) : Math.floor(Math.random() * 1500)))
      }
      requestAnimationFrame(this.animate)
    }
  }
}
</script>
