<template>
  <ul class="list">
    <li class="item" v-for="item in alphaList">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'cityAlphabet',
  data() {
    return {
      alphaList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
  }

}
</script>

<style lang="stylus" scoped>
  @import '~styles/varible.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
