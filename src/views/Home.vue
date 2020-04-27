<template>
  <div>
    <HomeBlink/>
    <Social/>
    <section class="expert">
      <span class="mt-1">Expert</span>
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
  .expert{
    width: 100%;
    background-image: url('../assets/images/bg2.jpg');
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
      font-family: roboto;
      color: white;
    }
    span:first-child{
      font-size: 4rem;
      font-weight: 900;
      letter-spacing: 5px;
    }
    span:nth-child(2){
      font-size: .7rem;
      text-transform: uppercase;
      font-style: italic;
      }
  }
</style>
