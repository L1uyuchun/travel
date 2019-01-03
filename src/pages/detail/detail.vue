<template>
  <div class="detail">
    <detail-header></detail-header>
    <div class="content">12345</div>
  </div>
</template>

<script>
  import detailHeader from './components/header'
  export default {
    name:'detail',
    components:{
      detailHeader
    }
  }

</script>

<style lang="stylus" scoped>
    .content
       height 20rem

</style>
