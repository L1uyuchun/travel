<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.swiperImg" alt="">
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'homeSwiper',
    data() {
      return {
        swiperOption: {
          pagination:'.swiper-pagination',
          loop:true

        },
        swiperList:[
          {
            id:'1',
            swiperImg:require('@/assets/img/homeImg/swiper1.jpg')
          },{
            id:'2',
            swiperImg:require('@/assets/img/homeImg/swiper2.jpg')
          },{
            id:'3',
            swiperImg:require('@/assets/img/homeImg/swiper3.jpg')
          }
        ]
      }
    },
    computed: {
      swiper() {
        console.log(this.$refs.mySwiper);
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color #ffffff !important
  .wrapper
    overflow hidden
    width 100%
    height 0px
    padding-bottom:26.67%
    background-color #eee
    .swiper-img
      width 100%
</style>
