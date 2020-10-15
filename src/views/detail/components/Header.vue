<template>
  <div>
    <transition name="fixed">
      <div class="header-abs" v-show="showAbs">
        <router-link to="/"><div class="iconfont header-abs-back">&#xe624;</div></router-link>
      </div>
    </transition>
    <transition name="fixed">
      <div class="header-fixed" v-show="!showAbs">
        <router-link to="/" class="iconfont header-fixed-back">&#xe624;</router-link>
        景点详情
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "DetailHeader",
    data() {
      return {
        showAbs: true
      };
    },
    created() {
      window.scrollTo(0,0);
    },
    mounted() {
      window.addEventListener('scroll',this.handleScroll);
    },
    methods: {
      handleScroll() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= 60) {
          this.showAbs = false;
        } else if (scrollTop <= 10) {
          this.showAbs = true;
        }
      }
    },
    // 页面卸载时触发该生命周期函数
    destroyed() {
      window.removeEventListener('scroll',this.handleScroll);
    }
  }
</script>

<style lang="stylus" scoped>
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    z-index 3
    .header-abs-back
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    background: #00bcd4
    font-size: .32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff

  .fixed-enter-active,.fixed-leave-active
    transition all .5s
  .fixed-enter,.fixed-leave-to
    opacity 0
</style>