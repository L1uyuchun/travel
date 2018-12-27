<template>
    <div id="home">
      <home-header></home-header>
      <home-swiper></home-swiper>
      <icon></icon>
      <recommend></recommend>
      <weekend></weekend>
    </div>
</template>

<script>
  import homeHeader from "./components/home-header"
  import homeSwiper from "./components/swiper"
  import icon from "./components/icon"
  import recommend from "./components/recommend"
  import weekend from "./components/weekend"
    export default {
        name: "home",
        components:{
          homeHeader,
          homeSwiper,
          icon,
          recommend,
          weekend

        }
    }
</script>

<style lang="stylus" scoped>
  #home
    background-color #eee




</style>
