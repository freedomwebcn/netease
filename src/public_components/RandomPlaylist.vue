<template>
  <div class="random-song" style="margin-bottom:10px">
    <div class="title">
      <h3 class="title-text">
        <i class="iconfont icon-xiangyouxuanzhuan"></i>
        华语金曲点唱机
      </h3>
      <span class="play">
        <i class="iconfont icon-bofang2"></i>
        <span>播放</span>
      </span>
    </div>

    <RandomplaylistSwiper></RandomplaylistSwiper>
  </div>
</template>


<script>
import RandomplaylistSwiper from "@/public_components/RandomplaylistSwiper";

export default {
  components: {
    RandomplaylistSwiper
  }
};
</script>


<style lang="less" scope>
.random-song {
  width: 375px;
  overflow: hidden;
  // height: 100px;
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 9px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background: #ffffff;
  .title {
    display: flex;
    position: relative;
    margin-bottom: 10px;
    .title-text {
      flex: 1;
      font-weight: 700;
      font-size: 17px;
      i {
        font-weight: 700;
        font-size: 18px;
      }
    }
    .play {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 22px;
      position: absolute;
      right: 2px;
      top: -3px;
      padding-right: 2px;
      // padding-left: 3px;
      border: 1px solid #e6e6e6;
      border-radius: 15px;
      font-size: 12px;

      i {
      }
      .icon-bofang2 {
        color: #fe3a3b;
        font-size: 15px;
        // position: relative;
        // top: 0px;
      }
    }
  }
}
</style>