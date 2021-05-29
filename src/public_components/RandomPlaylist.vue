<template>
  <div class="random-song" style="margin-bottom:10px">
    <div class="title">
      <h3 class="title-text">
        <i class="iconfont icon-xiangyouxuanzhuan"></i>
        华语金曲点唱机
      </h3>

      <More class="more" moreText="播放">
        <template #left>
          <i class="iconfont icon-bofang2 left-ico"></i>
        </template>
      </More>
    </div>

    <RandomplaylistSwiper :randomSongData='randomSongData'></RandomplaylistSwiper>
  </div>
</template>


<script>
import RandomplaylistSwiper from "@/public_components/RandomplaylistSwiper";
import More from "@/public_components/More";
export default {
  props: {
    randomSongData:Array
  },
  components: {
    RandomplaylistSwiper,
    More
  }
};
</script>


<style lang="less" scope>
.random-song {
  width: 375px;
  overflow: hidden;
  padding: 20px 15px 0 15px;
  margin-top: 9px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background: #ffffff;
  .title {
    display: flex;
    // position: relative;
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

    .more {
      padding: 3px 5px 3px 6px;
      .left-ico {
        color: red;
      }
    }
  }
}
</style>