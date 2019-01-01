<template>
  <div class="home">
    <home-header></home-header>
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
  import { mapState } from 'vuex'
  export default {
    name: "home",
    data() {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
        lastCity:''
      }
    },
    computed: {
      ...mapState(['city']),
    },
    components: {
      homeHeader,
      homeSwiper,
      icon,
      recommend,
      weekend

    },
    methods: {
      getHomeinfo() {
        this.axios.get("/api/index.json?city="+this.city).then(this.getHomeinfoSucc)

      },
      getHomeinfoSucc(res) {
        console.log(res);
        const result = res.data;
        if (result.ret && result.data) {
          console.log(result);
          this.swiperList = result.data.swiperList;
          this.iconList = result.data.iconList;
          this.recommendList = result.data.recommendList;
          this.weekendList = result.data.weekendList;

        }
      }
    },
    mounted() {
      this.getHomeinfo()
      this.lastCity=this.city
    },
    activated() {
      if( this.lastCity !== this.city ) {
        this.getHomeinfo()
        this.lastCity=this.city;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    background-color #eee


</style>
