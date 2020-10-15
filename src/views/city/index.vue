<template>
  <div>
    <city-header />
    <city-search :cities="cities" />
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter" />
    <city-alphabet :cities="cities" @letterClick="letterClick" />
  </div>
</template>

<script>
  import CityHeader from "./components/Header";
  import CitySearch from "./components/Search";
  import CityList from "./components/List";
  import CityAlphabet from "./components/Alphabet";
  export default {
    name: "index",
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet,
    },
    data() {
      return {
        hotCities: [], // 热门城市
        cities: {}, // 城市列表
        letter: ''  //  子组件字母传过来的字母值
      };
    },
    created() {
      this.init();
    },
    methods: {
      async init() {
        const data = await this.$http.get('/json/city.json');
        const res = data.data.data;
        this.hotCities = res.hotCities;
        this.cities = res.cities;
      },
      letterClick(letter) {
        this.letter = letter;
      }
    }
  }
</script>

<style scoped>

</style>