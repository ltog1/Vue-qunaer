<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ $store.state.city }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="cityClick(item.name)">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list" v-for="(innerItem,index) of item" :key="innerItem.id" @click="cityClick(innerItem.name)">
          <div class="item border-bottom">{{ innerItem.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "CityList",
    props: {
      hotCities: Array,
      cities: Object,
      letter: String
    },
    watch: {
      // 检测右边字母点击,滚动到相应位置
      letter() {
        if (this.letter) {
          const element = this.$refs[this.letter][0];
          this.scroll.scrollToElement(element); // scrollToElement(), better-scroll自带的方法
        }
      }
    },
    updated() {
      // 数据更新完成后调用better-scroll自带的refresh方法,即更新插件,作用是解决插件无法滚动的问题
      this.scroll.refresh();
    },
    methods: {
      cityClick(city) {
        this.$router.push({path: '/'});
        this.$store.commit('setCity', city);
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    }
  }
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>