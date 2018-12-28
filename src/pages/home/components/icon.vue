<template>
    <div class="iconBox">
      <swiper :options="swiperOption" v-if="iconPages.length">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in iconPages" :key="index">
          <div class="icon" v-for="item1 in item">
            <img :src="item1.imgUrl" alt="">
            <p class="icon-des">{{item1.desc}}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      <div class="location border-top">
        <p class="local"><span class="iconfont">&#xe601;</span>定位失败</p>
        <p class="menu"><span class="iconfont">&#xe7a8;</span>必游榜单</p>
      </div>



    </div>

</template>

<script>
export default {
  name: "icon",
  props:['iconList'],
  data () {
    return {
      swiperOption: {
        pagination:'.swiper-pagination',
        loop:true

      }
    }
  },
  computed:{
    iconPages () {
      let Pages=[];
      this.iconList.forEach((item,index) => {
        console.log(item);
        const page=Math.floor(index/8)//页数
        if (!Pages[page]) {
          Pages[page]=[];
        }
        Pages[page].push(item);
      })
      return Pages;


    }
  }
}
</script>

<style lang="stylus" scoped>
   @import '~styles/varible.styl'
   @import '~styles/sllipse.styl'
   .iconBox >>> .swiper-wrapper
     width 100%
     height 0
     padding-bottom 56%

  .iconBox
    margin-bottom 0.2rem
    background-color #fff
    .icon
      width 25%
      height 0
      padding-bottom: 22%;
      float: left;
      padding-top: 3%;
      overflow: hidden;
      img
        display block
        width 50%
        margin 0.1rem auto 0
      .icon-des
        text-align center
        color $darkTextColor
        line-height 0.6rem
        ellipse()
    .location
      height $headerHeight
      display flex
      color: $darkTextColor
    .local
      box-sizing border-box
      local_menu()
      .iconfont
         font-size 12px
         margin-right:0.1rem
    .menu
      local_menu()
      .iconfont
        margin-right:0.1rem




</style>
