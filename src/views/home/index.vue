<template>
  <div class="home">
    <home-header />
    <home-swiper :list="swiperList" />
    <home-icons :list="iconList" />
    <home-recommend :list="recommendList" />
    <home-weekend :list="weekendList" />
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from "./components/Recommend";
  import HomeWeekend from "./components/Weekend";
  export default {
    name: "index",
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend,
    },
    data () {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    created() {
      this.init();
    },
    methods: {
      async init() {
        const data = await this.$http.get('/json/index.json');
        const res = data.data.data;
        this.swiperList = res.swiperList
        this.iconList = res.iconList
        this.recommendList = res.recommendList
        this.weekendList = res.weekendList
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>