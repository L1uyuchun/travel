<template>
  <div class="gallery" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in galleryImg" :key="index">
        <img class="swiper-img" :src="item" alt="">
      </swiper-slide>


      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "gallery",
    props:{
      'galleryImg':Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: "fraction",
          loop:true,
          observer:true,
          observeParents:true,
        }
      }
    },
    methods: {
      handleGalleryClick() {
        this.$emit('galleryHidden',false);
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-container
     overflow inherit
  .gallery
    z-index 99
    position fixed
    top:0
    bottom 0
    left:0
    right: 0
    background-color #000
    display flex
    flex-direction column
    justify-content center
    .wrapper
      height 0
      padding-bottom 66.5%
      background-color #ffffff
      .swiper-img
         width 100%
      .swiper-pagination
         bottom -1rem
         color:#ffffff



</style>
