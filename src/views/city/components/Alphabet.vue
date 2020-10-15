<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item,index) of letters"
      :key="index"
      :ref="item"
      @touchstart="itemTouchStart"
      @touchmove="itemTouchMove"
      @touchend="itemTouchEnd"
      @click="itemClick(item)"
    >{{ item }}</li>
  </ul>
</template>

<script>
  export default {
    name: "CityAlphabet",
    props: {
      cities: Object
    },
    data() {
      return {
        startY: 0,
        touchStart: false,
        timer: null
      };
    },
    computed: {
      letters() {
        const letters = [];
        for (let i in this.cities) {
          letters.push(i);
        }
        return letters;
      }
    },
    // update周期函数,只有在首次渲染时和改变元数据data中数据,并且导致页面重新渲染时,才会进入该函数
    updated() {
      this.startY = this.$refs['A'][0].offsetTop;
    },
    methods: {
      // 点击字母时向父组件传递事件
      itemClick(item) {
        this.$emit('letterClick',item);
      },
      itemTouchStart(e) {
        this.touchStart = true;
      },
      itemTouchMove(e) {
        if (this.touchStart) {
          if (this.timer) {
            clearTimeout(this.timer);
          }
          this.timer = setTimeout(() => {
            const clientY = e.touches[0].clientY;
            const index = Math.floor((clientY - 79 - this.startY) / 20);
            if (index >= 0 && index < this.letters.length) {
              this.$emit('letterClick',this.letters[index]);
            }
          },6);
        }
      },
      itemTouchEnd() {
        this.touchStart = false;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: #00bcd4
</style>