<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="swiperList.length">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'homeSwiper',
    props:{
      'swiperList':Array
    },
    data() {
      return {
        swiperOption: {
          pagination:'.swiper-pagination',
          loop:true

        }
      }
    },
    mounted () {
      console.log(this.swiperList);
    }

  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color #ffffff !important
  /*.wrapper >>> .swiper-container*/
      /*height 26.67%*/
  .wrapper
    overflow hidden
    width 100%
    height 0px
    padding-bottom:31.2%
    background-color #eee
    .swiper-img
      width 100%
</style>
