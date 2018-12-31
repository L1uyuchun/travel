<template>
  <ul class="list">
    <li
      class="item"
      v-for="item in alphaList"
      :key="item"
      @click="selectPlace"
      @touchstart="toushStart"
      @touchmove="touchMove"
      @touchend="tontouchEnd"
      :ref="item"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'cityAlphabet',
  data() {
    return {
      alphaList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      isTouch:false
    }
  },
  methods: {
    selectPlace(e) {
      this.$emit('change',e.target.innerHTML);
    },
    toushStart () {
      this.isTouch=true;
    },
    touchMove (e) {
      //h获取A字母距离顶端的距离，再获取滑动过程中距离顶端的距离。除以字母元素的高度，就是当前鼠标所处的元素
      const startY=this.$refs['A'][0].offsetTop;
      const endY=e.touches[0].clientY-78;
      const moveLetter=Math.floor((endY-startY)/15);
      this.$emit('change',this.alphaList[moveLetter]);

    },
    tontouchEnd () {
      this.isTouch=false;
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
      line-height: .3rem
      text-align: center
      color: $bgColor
</style>
