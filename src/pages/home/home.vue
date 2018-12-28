<template>
    <div class="home">
      <home-header :city="city"></home-header>
      <home-swiper :swiperList="swiperList"></home-swiper>
      <icon :iconList="iconList"></icon>
      <recommend :recommendList="recommendList"></recommend>
      <weekend :weekendList="weekendList"></weekend>
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
        data () {
          return {
            city:'',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
          }
        },
        components:{
          homeHeader,
          homeSwiper,
          icon,
          recommend,
          weekend

        },
        mounted () {
            this.axios.get("http://localhost:8080/api/index.json")
              .then(res => {
                console.log(res);
                const result=res.data;
                if (result.ret&&result.data) {
                  console.log(result);
                  this.city=result.data.city;
                  this.swiperList=result.data.swiperList;
                  this.iconList=result.data.iconList;
                  this.recommendList=result.data.recommendList;
                  this.weekendList=result.data.weekendList;

                }
              })
        }
    }
</script>

<style lang="stylus" scoped>
  .home
    background-color #eee




</style>
