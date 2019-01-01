<template>
  <div class="detail">
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="@/assets/img/detail/gugong.jpg" alt="">
      <i class="iconfont goback" @click="goback">&#xe604;</i>
      <div class="infor">
        <p class="title">故宫（AAAAA级景区）</p>
        <p class="imgNum"><i class="iconfont iconSize">&#xe67e;</i>8</p>
      </div>
    </div>
    <Gallery
      v-show="galleryShow"
      :galleryImg="galleryImg"
      @galleryHidden="galleryHidden"
    ></Gallery>
  </div>
</template>

<script>
  import Gallery from 'common/gallery/gallery'
  export default {
    name: "Detail",
    data() {
      return {
        galleryShow:false,
        galleryImg:[require("@/assets/img/detail/gugongswiper1.jpg"),require("@/assets/img/detail/gugongswiper2.jpg")]
      }
    },
    components:{
      Gallery
    },
    methods: {
      goback() {
        this.$router.go(-1);
      },
      handleBannerClick() {
        this.galleryShow=true
      },
      galleryHidden(boolean) {
        this.galleryShow=boolean;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .detail
    .banner
      overflow hidden
      height 0
      padding-bottom 55%
      position relative

      .banner-img
        display block
        width 100%

      .goback
        position absolute
        top: 0.1rem
        left 0.1rem
        color #ffffff
        background-color rgba(0, 0, 0, 0.4)
        font-size 0.4rem
        width 0.5rem
        height 0.5rem
        line-height 0.5rem
        border-radius 50%
        text-align center
      .infor
        position absolute
        width 100%
        left: 0
        bottom 0rem
        color #ffffff
        line-height: .7rem
        font-size 0.4rem
        background-image linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .4))

      .title
        padding 0rem 1.3rem 0rem 0.3rem

      .imgNum
        width 0.6rem
        padding 0rem 0.25rem
        height 0.4rem
        line-height 0.4rem
        font-size: 0.25rem;
        border-radius 0.2rem
        background-color rgba(0, 0, 0, .4)
        position absolute
        right 0.2rem
        bottom 0.05rem

        .iconSize
          font-size 0.2rem
          margin-right 0.1rem


</style>
