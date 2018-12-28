<template>
  <div class="cityHeader">
    <div class="headerTitle">
      <router-link to="/">
        <i class="iconfont">&#xe604;</i>
      </router-link>
      <span>城市选择</span>
    </div>
    <div class="search">
      <input  class="input" type="text" placeholder="请输入城市名称或者汉语拼音">
    </div>
  </div>

</template>

<script>
    export default {
        name: "cityHeader"
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varible.styl'
    .cityHeader
      background-color $bgColor
      .headerTitle
        height $headerHeight
        text-align center
        line-height $headerHeight
        color: #ffffff
        position relative
        font-size 0.3rem
        .iconfont
          color: #ffffff
          font-size 0.35rem
          position absolute
          left:0.2rem
          top:0
          bottom:0
      .search
        padding 0.1rem 0.2rem
        height 0.5rem
        .input
          width 100%
          box-sizing border-box
          line-height 0.5rem
          text-align center
          color #666
          border-radius 0.06rem
          font-size 0.15rem
          padding 0rem 0.2rem

</style>
