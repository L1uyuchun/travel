<template>
    <div id="home">
      <home-header></home-header>
      <home-swiper></home-swiper>
      <div>text</div>
    </div>
</template>

<script>
  import homeHeader from "./components/home-header"
  import homeSwiper from "./components/swiper"
    export default {
        name: "home",
        components:{
          homeHeader,
          homeSwiper

        }
    }
</script>

<style scoped>




</style>
