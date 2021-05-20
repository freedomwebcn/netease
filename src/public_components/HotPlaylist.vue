<template>
  <div>
    <div class="recommend-playlist">
      <div class="title-text">
        <h3 class="l-title">{{title}}</h3>
        <span class="r-more ">
          <span>更多</span>
          <i class="iconfont icon-dayuhao"></i>
        </span>
      </div>
      <Playlist></Playlist>
    </div>
  </div>
</template>
<script>
import Playlist from "@components/Playlist/Playlist";

export default {
  props: {
    title: String
  },
  components: {
    Playlist
  }
};
</script>

<style lang="less" scope>
.recommend-playlist {
  background: #ffffff;
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 13px;

  .title-text {
    display: flex;
    position: relative;
    padding: 15px 13px 10px 11px;
    .l-title {
      flex: 1;
      font-size: 17px;
      font-weight: 700;
    }
    // @media screen and (max-width: 320px) {
    //   .r-more {
    //     top: 9px;
    //   }
    // }
    // @media screen and (min-width: 330px) {
    //   .r-more {
    //     top: 12px;
    //   }
    // }
    .r-more {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 50px;
      height: 22px;
      // line-height: 22px;
      padding-top: 1px;
      // padding: 3px 3px 3px 8px;
      right: 12px;
      border: 1px solid #e6e6e6;
      border-radius: 15px;
      font-size: 13px;
      span{
        margin-left: -3px;
      }
      
      i {
        // margin-left: -4px;
        font-size: 12px;
        position: absolute;
        top: 4px;
        left: 35px;
        // position: relative;
        // top: -1px;
      }
    }
  }
}
</style>