<template>
  <div class="locationList wrapper" ref="wrapper">
    <div class="content">
      <div class="area">
        <p class="title">热门城市</p>
        <ul class="city-box">
          <li class="city-name border">北京</li>
          <li class="city-name border">北京</li>
          <li class="city-name border">北京</li>
          <li class="city-name border">北京</li>
          <li class="city-name border">北京</li>
        </ul>
      </div>
      <div class="area">
        <p class="title">A</p>
        <ul class="item-box">
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
        </ul>
      </div>
      <div class="area">
        <p class="title">A</p>
        <ul class="item-box">
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
        </ul>
      </div>
      <div class="area">
        <p class="title">A</p>
        <ul class="item-box">
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
        </ul>
      </div>
      <div class="area">
        <p class="title">A</p>
        <ul class="item-box">
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
        </ul>
      </div>
      <div class="area">
        <p class="title">A</p>
        <ul class="item-box">
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
          <li class="item border-bottom">北京</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "locationList",
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {})
      })
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varible.styl"
  .locationList
    position absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom 0
    overflow hidden

    .area
      .title
        height 0.6rem
        background-color #eee
        line-height 0.6rem
        padding-left 0.2rem

      .city-box
        overflow hidden
        padding-left 2.7%
        padding-bottom 0.2rem

        .city-name
          width 29.73%
          height 0.25rem
          line-height 0.25rem
          padding 0.2rem 0rem
          text-align center
          margin .2rem 2.7% 0rem 0rem
          float left

          &::before
            border-color #ccc
            border-radius 0.1rem

      .item-box
        .item
          height 0.6rem
          line-height 0.6rem
          padding-left 0.2rem


</style>
