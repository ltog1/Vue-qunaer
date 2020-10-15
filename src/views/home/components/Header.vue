<template>
  <div class="header">
    <div class="header-left"><span class="iconfont back-icon">&#xe624;</span></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <router-link to="/city" class="header-right">{{ $store.state.city }}<span class="iconfont arrow-icon">&#xe64a;</span></router-link>
  </div>
</template>

<script>
  export default {
    name: "HomeHeader"
  }
</script>

<style lang="stylus" scoped>
  .header
    display: flex
    align-items center
    line-height: .86rem
    background: #00bcd4
    color: #fff
    .header-left
      width: .64rem
      float: left
      text-align: center
      .back-icon
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin 0 .1rem 0 .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color #fff
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
      .arrow-icon
        margin-left: .04rem
        font-size: .24rem
</style>