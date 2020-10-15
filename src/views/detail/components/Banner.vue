<template>
  <div>
    <div class="banner">
      <img class="banner-img" :src="bannerImg" @click="bannerClick">
      <div class="banner-info">
        <div class="banner-tittle">{{ sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{ gallaryImgs.length }}
        </div>
      </div>
    </div>

    <transition name="gallary">
      <div class="container" v-if="gallaryShow">
        <div class="wrapper" @click="closeGallary">
          <swiper :options="swiperOptions">
            <swiper-slide v-for="(item,index) of gallaryImgs" :key="index"><img :src="item" class="gallary-img"></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "DetailBanner",
    props: {
      sightName: String,
      bannerImg: String,
      gallaryImgs: Array
    },
    data() {
      return {
        gallaryShow: false,
        swiperOptions: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction'  // 分页样式 (默认是圆点)
        }
      };
    },
    methods: {
      bannerClick() {
        this.gallaryShow = true;
      },
      closeGallary() {
        this.gallaryShow = false;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display flex
      justify-content space-between
      height .4rem
      line-height .4rem
      color #fff
      padding 0 .3rem
      background-image linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.8))
      position absolute
      width 100%
      bottom 0
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-right .4rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem


  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem


  .gallary-enter-active,.gallary-leave-active
    transition all .5s
  .gallary-enter,.gallary-leave-to
    opacity 0
</style>