<template>
  <div>
    <detail-header />
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" />
    <div class="content">
      <detail-list :list="list" />
    </div>
  </div>
</template>

<script>
  import DetailHeader from "./components/Header";
  import DetailBanner from "./components/Banner";
  import DetailList from "./components/List";
  export default {
    name: "index",
    components: {
      DetailHeader,
      DetailBanner,
      DetailList,
    },
    data() {
      return {
        sightName: '',  // 详情页title
        bannerImg: '',  // 详情页banner图片
        gallaryImgs: [],  // 详情页轮播图片
        list: []  // 详情页多级列表
      };
    },
    created() {
      this.init();
    },
    methods: {
      async init() {
        const data = await this.$http.get('/json/detail.json', {
          params: {
            id: this.$route.params.id
          }
        });
        const res = data.data.data;
        this.bannerImg = res.bannerImg;
        this.sightName = res.sightName;
        this.gallaryImgs = res.gallaryImgs;
        this.list = res.categoryList;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>