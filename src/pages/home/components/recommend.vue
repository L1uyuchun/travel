<template>
  <div class="recommend">
    <p class="love">猜你喜欢</p>
    <div class="point border-bottom"
         v-for="item in recommendList"
         :key="item.id"
         @click="goDetail(item.id)"
    >
      <img :src="item.imgUrl" alt="" class="pointImg">
      <div class="rightText">
        <p class="title">{{item.title}}</p>
        <p class="comment"><span class="star"><img src="~@/assets/img/homeImg/star.png" alt="" v-for="item in 5"></span>{{item.commentMount}}条评论
        </p>
        <p class="price">
          <span class="symbol">&yen;</span>
          <span class="mount">{{item.mount}}</span>
          <span class="text">起</span>
          <span class="addr">金牛区</span>
        </p>
        <p class="intro">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "recommend",
    props: ['recommendList'],
    methods: {
      goDetail(id) {
        this.$router.push({ path:'/detail' });
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/sllipse.styl"
  .recommend
    background-color #ffffff;
    padding-left: 0.2rem

    .love
      height 1rem
      line-height 1rem
      font-size 0.35rem

    .point
      padding-top: 0.2rem
      position relative

      .pointImg
        display block
        width 2rem
        height 2rem
        position absolute

      .rightText
        padding-left 2.5rem

        .title
          ellipse()
          font-size 0.3rem
          padding-top: 0.2rem;

        .comment
          line-height 0.7rem
          font-size 0.2rem
          color #666

          .star
            display inline
            vertical-align top
            margin-right: 0.2rem

        .price
          height 0.4rem
          padding-top 0.4rem

          .symbol
            color #ff9b1b

          .mount
            font-size 0.4rem
            color #ff9b1b

          .addr
            float right
            padding-right: 0.2rem

        .intro
          line-height 1rem
          color red
          ellipse()
          min-width 0rem


</style>
