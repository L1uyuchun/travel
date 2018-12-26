<template>
    <div id="home">
      <home-header></home-header>
      <home-swiper></home-swiper>
      <icon></icon>
    </div>
</template>

<script>
  import homeHeader from "./components/home-header"
  import homeSwiper from "./components/swiper"
  import icon from "./components/icon"
    export default {
        name: "home",
        components:{
          homeHeader,
          homeSwiper,
          icon

        }
    }
</script>

<style scoped>




</style>
