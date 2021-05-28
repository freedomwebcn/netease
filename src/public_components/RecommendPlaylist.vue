<template>
  <div>
    <div class="recommend-playlist">
      <div class="title-text">
        <h3 class="l-title">{{title}}</h3>

        <More moreText="更多">
          <template #right>
            <i class="iconfont icon-dayuhao"></i>
          </template>
        </More>
      </div>
      <Playlist :playlistInfo='resRecommendPlaylist'></Playlist>
    </div>
  </div>
</template>
<script>
import Playlist from "@components/Playlist/Playlist";
import More from "@/public_components/More";

export default {
  props: {
    title: String,
    resRecommendPlaylist:Array
  },
  components: {
    Playlist,
    More
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
    padding: 15px 15px 10px 15px;
    .l-title {
      flex: 1;
      font-size: 17px;
      font-weight: 700;
    }
  }
}
</style>