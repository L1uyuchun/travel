<template>
    <div id="homeHeader">
      <div class="top">
        <div class="goback iconfont">&#xe604;</div>
        <div class="searchInput">
          <span class="iconfont iconCss">&#xe62a;</span>
          输入城市/景点/游玩/主题
        </div>
        <router-link to="/city" name="div" class="rightPlace">
           <span>{{city}}</span><i class="iconfont">&#xe600;</i>
        </router-link>
      </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
	export default {
		name:'HomeHeader',
		computed:{
		  ...mapState(['city'])
    }
	}
</script>

<style lang="stylus" scoped>
   @import '~styles/varible.styl'

  .top
    height: $headerHeight
    display: flex
    background-color $bgColor
    color: #ffffff;
    .iconfont
      font-size 23px
    .goback
      width:0.7rem
      float: left
      line-height:$headerHeight
      text-align center
    .searchInput
       padding-left 10px
       color #ccc
       line-height:27px
       font-size 0.15rem
       flex:1
       background-color #ffffff
       margin:8px 0px
       border-radius 0.05rem
       .iconCss
         font-size 0.35rem
         vertical-align middle
    .rightPlace
      min-width:1.0rem
      padding 0rem 0.1rem
      float: right
      line-height $headerHeight
      text-align center
      color #ffffff
      span
        display inline-block
        vertical-align top
      i
        font-size 20px











</style>
