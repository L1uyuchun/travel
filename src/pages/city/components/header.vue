<template>
  <div class="cityHeader">
    <div class="headerTitle">
      <router-link to="/">
        <i class="iconfont">&#xe604;</i>
      </router-link>
      <span>城市选择</span>
    </div>
    <div class="search">
      <input v-model="keyword" class="input" type="text" placeholder="请输入城市名称或者汉语拼音">
    </div>
    <ul class="searchTip" v-show="ulisshow">
      <li
        class="search-item border-bottom"
        v-for="(item,index) in searchList"
        :key="index"
      >{{item}}</li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: "cityHeader",
    props: {
      cities: Object
    },
    data() {
      return {
        keyword: '',
        searchList:[],
        timer:null
      }
    },
    computed: {
      cityList() {
        const list = [];
        for (let key in this.cities) {
          this.cities[key].forEach((item) => {
            list.push(item)
          })
        }
        return list
      },
      ulisshow() {
        return this.searchList.length
      }

    },
    watch: {
      keyword() {
        if(this.timer){
          clearTimeout(this.timer);
        }
        if(!this.keyword) {
          this.searchList=[];
          return ;
        }
        this.searchList=[]
        this.timer=setTimeout(() => {
          //根据keyword改变匹配城市数据中的元素

          for (let key in this.cityList) {
            if(this.cityList[key].name.indexOf(this.keyword)>-1||this.cityList[key].spell.indexOf(this.keyword)>-1){
              this.searchList.push(this.cityList[key].name);
            }
          }
          console.log(this.searchList);
        },100)
      }
    }
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
        left: 0.2rem
        top: 0
        bottom: 0

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

    .searchTip
      position absolute;
      top 78px
      left: 0
      right: 0
      bottom: 0
      z-index: 1
      background-color #eee

      .search-item
        line-height 0.6rem
        background-color #ffffff
        width 100%
</style>
