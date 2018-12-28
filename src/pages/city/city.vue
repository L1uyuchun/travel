<template>
    <div class="city">
      <city-header></city-header>
      <location-list></location-list>
      <city-alphabet></city-alphabet>
    </div>
</template>

<script>
  import cityHeader from './components/header'
  import locationList from './components/locationList'
  import  cityAlphabet from './components/Alphabet'
  export default {
        name: "city",
        components:{
          cityHeader,
          locationList,
          cityAlphabet
        }
    }
</script>

<style scoped>

</style>
