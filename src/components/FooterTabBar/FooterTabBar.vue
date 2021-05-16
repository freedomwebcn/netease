<template>
  <div class="tab_box">
    <div class="tab_item">
      <li>
        <i :class="`iconfont icon-zhuye ${index === 0 ? 'show_bgc':''}`" @click="changeState(0)"></i>
        <span :class="index ===0?'change_text_color' :''">发现</span>
      </li>
      <li>
        <i :class="`iconfont icon-yinle ${index === 1 ? 'show_bgc':''}`" @click="changeState(1)"></i>
        <span :class="index ===1?'change_text_color' :''">我的</span>
      </li>
      <li>
        <i :class="`iconfont icon-haoyou ${index === 2 ? 'show_bgc':''}`" @click="changeState(2)"></i>
        <span :class="index ===2?'change_text_color' :''">云村</span>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slideIndex"],
  data() {
    return {
      index: 0
    };
  },
  computed: {},
  watch: {
    slideIndex: function(newValue) {
      console.log(newValue);
      
      this.index = newValue;
    //   console.log(i, "-------------");
    }
  },
  mounted() {
    // console.log(this.pageIndex);
  },
  methods: {
    changeState(index) {
      this.index = index;
      this.$emit("tabChangeIndex", index);

    }
  }
};
</script>

<style lang="less" scope>
.tab_box {
  width: 375px;
  height: 61px;
  border-top: 1px solid #ebedf0;
  background-color: #ffffff;
  position: absolute;
  z-index: 9999;
  bottom: 0;
  .tab_item {
    width: 100%;
    height: 100%;
    display: flex;
    li {
      flex: 1 1 33.33%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #bcbcbc;
      text-align: center;
      i {
        width: 32px;
        height: 32px;
        line-height: 30px;
        font-size: 24px;
        &.show_bgc {
          background-image: linear-gradient(45deg, #dd001b; #ff9797);
          //   background-color: ;
          border-radius: 50%;
          color: #ffffff;
        }
      }
      span {
        margin-top: 2px;
        &.change_text_color {
          color: #dd001b;
        }
      }
    }
  }
}
</style>