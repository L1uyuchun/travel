<template>
  <div class="recommend">
    <p class="love">周末去哪儿</p>
    <div class="point border-bottom" v-for="item in 5">
      <img src="~@/assets/img/homeImg/week.jpg" alt="" class="pointImg">
      <div class="rightText">
        <p class="title">成都欢乐谷</p>
        <p class="intro">超级旋转过山车刺激到让你怀疑人生超级旋转过山车刺激到让你怀疑人生</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "weekend"
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
          height 0
          overflow hidden
          padding-bottom 0.7rem
          line-height 1rem
        .intro
          height 0
          overflow hidden
          padding-bottom 0.7rem
          line-height 0.5rem
          color #666
          ellipse()


</style>
