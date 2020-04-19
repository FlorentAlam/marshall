<template>
  <div>
    <HomeBlink/>
    <Social/>
    <section>
      <span>Expert</span>
      <span>Depuis 1962</span>
    </section>
  </div>
</template>

<script>
import Social from '../components/Social'
import HomeBlink from '../components/HomeBlink'
export default {
  components: {
    Social,
    HomeBlink
  }
}
</script>

<style lang="scss" scoped>
  section{
    width: 100%;
    background-image: url('../assets/images/bg2.jpg');
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
      font-family: roboto;
      color: white;
      font-size: 4rem;
    }
  }
</style>
