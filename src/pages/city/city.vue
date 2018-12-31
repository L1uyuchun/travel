<template>
  <div class="city">
    <city-header></city-header>
    <location-list
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
    ></location-list>
    <city-alphabet @change="handleChange"></city-alphabet>
  </div>
</template>

<script>
  import cityHeader from './components/header'
  import locationList from './components/locationList'
  import cityAlphabet from './components/Alphabet'

  export default {
    name: "city",
    components: {
      cityHeader,
      locationList,
      cityAlphabet
    },
    data() {
      return {
        cities:{},
        hotCities:[],
        letter:''//接收alphabet组件传递过来的点击的字母
      }
    },
    methods: {
      handleChange(letter) {
        this.letter=letter;
      }
    },
    mounted() {
      this.axios.get('/api/city.json')
        .then(res => {
          const res1=res.data;
          console.log(res1);
          if (res1.ret&&res1.data) {
             this.cities=res1.data.cities;
             this.hotCities=res1.data.hotCities;
          }
        })
    }

  }
</script>

<style scoped>

</style>
