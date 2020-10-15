<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword">
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li class="search-item border-bottom" v-for="(item,index) of list" :key="index" @click="cityClick(item)">{{ item }}</li>
        <li class="search-item border-bottom" v-if="!list.length">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "CitySearch",
    props: {
      cities: Object
    },
    data() {
      return {
        keyword: '',
        list: [],
        timer: null
      };
    },
    watch: {
      // 检测输入的值的变化,输出结果
      keyword() {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        if (!this.keyword) {
          this.list = [];
          return ;
        }
        this.timer = setTimeout(() => {
          const result = [];
          for (let i in this.cities) {
            this.cities[i].forEach(item => {
              if (item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
                result.push(item.name);
              }
            });
          }
          this.list = result;
        },100);
      }
    },
    methods: {
      cityClick(city) {
        this.$router.push({path: '/'});
        this.$store.commit('setCity', city);
      }
    },
    updated() {
      // 数据更新完成后调用better-scroll自带的refresh方法,即更新插件,作用是解决插件无法滚动的问题
      this.scroll.refresh();
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.search, {
        click: true
      })
    },
  }
</script>

<style lang="stylus" scoped>
  .search
    height: .72rem
    padding: 0 .1rem
    background: #00bcd4
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>