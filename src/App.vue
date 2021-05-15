<template>
  <div id="app">
    <Home @slideIndex="slideIndex" ref= "home"></Home>
    <FooterTabBar :pageIndex="index" v-on:newIndex="newIndex"></FooterTabBar>
  </div>
</template>
<script>
import FooterTabBar from "@components/FooterTabBar/FooterTabBar";
import Home from "@components/Home/Home";
// import BScroll from "@better-scroll/core";

export default {
  data() {
    return {
      index: 0,
    };
  },
  mounted() {},
  methods: {
    newIndex: function(tabIndex) {
      // tabIndex : tab底栏切换后的index值
      // 移动到对应的 slide 页
      this.$refs.home.swiper.slideTo(tabIndex, 0, false)
    },
    slideIndex:function(value){
      this.index = value
    }
  },
  computed: {},

  components: {
    FooterTabBar,
    Home
  }
};
</script>
<style lang="less" scope>
@color: #f5f5f5;
#app {
  width: 100%;
  height: 100%;
  background-color: @color ;
}
</style>
