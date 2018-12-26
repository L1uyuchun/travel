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
        imgUrl:require('@/assets/img/iconImg/icon1.png'),
        text:'景点门票'
      },{
        id:'0002',
        imgUrl:require('@/assets/img/iconImg/icon2.png'),
        text:'泡温泉'
      },{
        id:'0003',
        imgUrl:require('@/assets/img/iconImg/icon3.png'),
        text:'成都必游'
      },{
        id:'0004',
        imgUrl:require('@/assets/img/iconImg/icon4.png'),
        text:'川剧变脸'
      },{
        id:'0005',
        imgUrl:require('@/assets/img/iconImg/icon5.gif'),
        text:'年终大促'
      },{
        id:'0006',
        imgUrl:require('@/assets/img/iconImg/icon6.png'),
        text:'滑雪'
      },{
        id:'0007',
        imgUrl:require('@/assets/img/iconImg/icon7.png'),
        text:'一日游'
      },{
        id:'0008',
        imgUrl:require('@/assets/img/iconImg/icon8.png'),
        text:'成都熊猫基地'
      },{
        id:'0009',
        imgUrl:require('@/assets/img/iconImg/icon1.png'),
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
   .iconBox >>> .swiper-wrapper
     width 100%
     height 0
     padding-bottom 56%

  .iconBox
    border-bottom:1px solid #eee
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


</style>
