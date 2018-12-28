<template>
  <div class="recommend">
    <p class="love">周末去哪儿</p>
    <div class="point border-bottom" v-for="item in weekendList" :key="item.id">
      <img :src="item.imgUrl" alt="" class="pointImg">
      <div class="rightText">
        <p class="title">{{item.title}}</p>
        <p class="intro">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "weekend",
    props:{
      "weekendList":Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/sllipse.styl"
  .recommend
    .love
      padding-left:0.2rem
      height 1rem
      line-height 1rem
      font-size 0.35rem
    .point
      background-color #ffffff
      .pointImg
        display block
        width 100%

      .rightText
        padding-left 0.2rem

        .title
          ellipse()
          font-size 0.3rem
          title-intro()
          line-height 1rem
        .intro
          font-size 0.2rem
          title-intro()
          line-height 0.5rem
          color #666
          ellipse()


</style>
