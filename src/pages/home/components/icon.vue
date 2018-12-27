<template>
    <div class="iconBox">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in iconPages" :key="index">
          <div class="icon" v-for="item1 in item">
            <img :src="item1.imgUrl" alt="">
            <p class="icon-des">{{item1.text}}</p>
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
  data () {
    return {
      swiperOption: {
        pagination:'.swiper-pagination',
        loop:true

      },
      iconList:[{
        id:'0001',
        imgUrl:require('@/assets/img/homeImg/icon1.png'),
        text:'景点门票'
      },{
        id:'0002',
        imgUrl:require('@/assets/img/homeImg/icon2.png'),
        text:'泡温泉'
      },{
        id:'0003',
        imgUrl:require('@/assets/img/homeImg/icon3.png'),
        text:'成都必游'
      },{
        id:'0004',
        imgUrl:require('@/assets/img/homeImg/icon4.png'),
        text:'川剧变脸'
      },{
        id:'0005',
        imgUrl:require('@/assets/img/homeImg/icon5.gif'),
        text:'年终大促'
      },{
        id:'0006',
        imgUrl:require('@/assets/img/homeImg/icon6.png'),
        text:'滑雪'
      },{
        id:'0007',
        imgUrl:require('@/assets/img/homeImg/icon7.png'),
        text:'一日游'
      },{
        id:'0008',
        imgUrl:require('@/assets/img/homeImg/icon8.png'),
        text:'成都熊猫基地'
      },{
        id:'0009',
        imgUrl:require('@/assets/img/homeImg/icon1.png'),
        text:'黑水彩林'
      },]
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
      padding-bottom 25%
      float: left
      overflow hidden
      img
        display block
        width 70%
        margin 0.1rem auto 0
      .icon-des
        text-align center
        color $darkTextColor
        line-height 0.45rem
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
