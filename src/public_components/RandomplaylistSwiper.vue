<template>
  <div>
    <div class="random-song-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide song-container slide-1 ref='songContainer'">
          <div class="song-info-container clear-fix">
            <img src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg" alt />
            <div class="play-mask iconfont icon-bofang2"></div>
            <div class="cd-mask"></div>

            <div class="song-info line-h-25 pt">
              <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
              <h3 class="song-name ellipsis">童话话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天</h3>
              <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
            </div>
            <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
            <p class="describe">
              <i class="ico">独家</i>
              <span class="font-color">云音乐飙升榜</span>
            </p>

            <div class="line border-bottom-1px"></div>
          </div>

          <div class="song-info-container clear-fix mt">
            <img src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg" alt />
            <div class="song-info line-h-25 pt">
              <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
              <h3 class="song-name ellipsis">{{songName}}</h3>
              <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
            </div>
            <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
            <p class="describe">
              <i>独家</i>
              <span>云音乐飙升榜</span>
            </p>

            <div class="line border-bottom-1px"></div>
          </div>

          <div class="song-info-container clear-fix">
            <img src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg" alt />
            <div class="song-info line-h-25 pt">
              <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
              <h3 class="song-name ellipsis">童话童天的</h3>
              <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
            </div>
            <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
            <p class="describe">
              <i>独家</i>
              <span>云音乐飙升榜</span>
            </p>
          </div>
        </div>

        <div class="swiper-slide song-container slide-2">
          <div class="song-info-container clear-fix">
            <img src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg" alt />
            <div class="play-mask iconfont icon-bofang2"></div>
            <div class="cd-mask"></div>

            <div class="song-info line-h-25 pt">
              <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
              <h3 class="song-name ellipsis">童话话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天</h3>
              <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
            </div>
            <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
            <p class="describe">
              <!-- <i>独家</i> -->
              <span class="font-color">云音乐飙升榜</span>
            </p>
            <div class="line border-bottom-1px"></div>
          </div>

          <div class="song-info-container clear-fix mt">
            <img src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg" alt />
            <div class="song-info line-h-25 pt">
              <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
              <h3 class="song-name ellipsis">童话童天的</h3>
              <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
            </div>
            <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
            <p class="describe">
              <i>独家</i>
              <span>云音乐飙升榜</span>
            </p>

            <div class="line border-bottom-1px"></div>
          </div>
          <div class="song-info-container clear-fix mt">
            <img src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg" alt />
            <div class="song-info line-h-25 pt">
              <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
              <h3 class="song-name ellipsis">童话童天的</h3>
              <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
            </div>
            <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
            <p class="describe">
              <i>独家</i>
              <span>云音乐飙升榜</span>
            </p>

            <div class="line border-bottom-1px"></div>
          </div>
        </div>
        <div class="swiper-slide song-container slide-3">
          <div class="song-info-container clear-fix">
            <img src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg" alt />
            <div class="play-mask iconfont icon-bofang2"></div>
            <div class="song-info line-h-25 pt">
              <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
              <h3 class="song-name ellipsis">童话话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天</h3>
              <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
            </div>
            <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
            <p class="describe">
              <!-- <i>独家</i> -->
              <span class="font-color">云音乐飙升榜</span>
            </p>
            <div class="line border-bottom-1px"></div>
          </div>
          <div class="song-info-container mt clear-fix">
            <img src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg" alt />
            <div class="play-mask iconfont icon-bofang2"></div>
            <div class="song-info line-h-25 pt">
              <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
              <h3 class="song-name ellipsis">童话话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天</h3>
              <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
            </div>
            <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
            <p class="describe">
              <!-- <i>独家</i> -->
              <span class="font-color">云音乐飙升榜</span>
            </p>
            <div class="line border-bottom-1px"></div>
          </div>
          <div class="song-info-container clear-fix">
            <img src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg" alt />
            <div class="play-mask iconfont icon-bofang2"></div>
            <div class="song-info line-h-25 pt">
              <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
              <h3 class="song-name ellipsis">童话话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天</h3>
              <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
            </div>
            <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
            <p class="describe">
              <!-- <i>独家</i> -->
              <span class="font-color">云音乐飙升榜</span>
            </p>
            <div class="line"></div>
          </div>
        </div>
        <div class="swiper-slide song-container slide-4">
          <div class="song-info-container clear-fix">
            <img src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg" alt />
            <div class="play-mask iconfont icon-bofang2"></div>
            <div class="song-info line-h-25 pt">
              <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
              <h3 class="song-name ellipsis">童话话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天</h3>
              <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
            </div>
            <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
            <p class="describe">
              <!-- <i>独家</i> -->
              <span class="font-color">云音乐飙升榜</span>
            </p>
            <div class="line border-bottom-1px"></div>
          </div>
          <div class="song-info-container mt clear-fix">
            <img src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg" alt />
            <div class="play-mask iconfont icon-bofang2"></div>
            <div class="song-info line-h-25 pt">
              <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
              <h3 class="song-name ellipsis">童话话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天</h3>
              <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
            </div>
            <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
            <p class="describe">
              <!-- <i>独家</i> -->
              <span class="font-color">云音乐飙升榜</span>
            </p>
            <div class="line border-bottom-1px"></div>
          </div>
          <div class="song-info-container clear-fix">
            <img src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg" alt />
            <div class="play-mask iconfont icon-bofang2"></div>
            <div class="song-info line-h-50">
              <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
              <h3 class="song-name ellipsis">童话话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天</h3>
              <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
            </div>
            <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
            <p class="describe">
              <!-- <i>独家</i> -->
              <span class="font-color"></span>
            </p>
            <div class></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import Swiper from "swiper/js/swiper.js";


export default {
  props: {
    songName: String
  },
  mounted() {
    this._initRandomSongSwiper();
  },
  methods: {
    // 初始化随机歌曲
    _initRandomSongSwiper() {
      this.randomSongSwiper = new Swiper(".random-song-swiper", {
        resistanceRatio: 0 //取消回弹
      });
      this.setMaxWidth();
    },

    // 设置类名singer最大宽度
    setMaxWidth() {
      const songInfoArr = Array.from(
        document.getElementsByClassName("song-info")
      );
      // debugger;
      songInfoArr.forEach((songInfo, index) => {
        // debugger;
        // 获取父元素总宽
        const songInfo_W = songInfo.clientWidth;
        // 获取子元素歌名的宽度
        const songName_W = songInfo.children[0].clientWidth;
        // 获取歌名的最大宽度
        const songNameMax_W = getComputedStyle(songInfo.children[0]).maxWidth;
        const formatSongNameMax_W = parseInt(songNameMax_W.slice(0, -2));
        if (songName_W < formatSongNameMax_W) {
          // 父容器的宽度减去歌名的宽度
          const set_W = songInfo_W - songName_W;
          // 设置歌手的最大宽度
          songInfo.children[1].style.maxWidth = set_W - 4 + "px";
          // songInfo.children[1].style.color = "red";
        } else {
          // 父容器宽度 减去歌名容器的最大宽 - 2个外边距
          const set_W = songInfo_W - formatSongNameMax_W - 4;
          songInfo.children[1].style.maxWidth = set_W + "px";
        }
      });
    }
  }
};
</script>


<style lang="less" scope>
@import "../tools/border-1px.less";

.random-song-swiper {
  .song-container {
    .song-info-container {
      position: relative;

      .line {
        width: 280px;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 54px;
        top: 54px;
      }
      &.mt {
        margin-top: 10px;
        margin-bottom: 10px;
      }
      // height: 94px;
      img {
        width: 50px;
        height: 50px;
        float: left;
        border-radius: 8px;
        margin-right: 5px;
      }
      .play-mask {
        position: absolute;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        color: rgba(255, 255, 255, 0.705);
        font-size: 25px;
      }
      .cd-mask {
        position: absolute;
        width: 50px;
        height: 50px;
        top: -5px;
        z-index: -9999;
        clip: rect(0, 25px, 25px, 0);
        border-radius: 50%;
        transform: rotate(45deg);
        background-color: black;
      }

      .song-info {
        width: 280px;
        float: left;
        &.pt {
          padding-top: 4px;
        }
        // p元素没内容 行高等于图片的高度 有内容 行高是 图片高度的一半
        &.line-h-25{
          line-height: 25px;
        }
        &.line-h-50 {
          line-height: 50px;
        }

        .ellipsis {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .song-name {
          float: left;
          max-width: 230px;
          font-size: 15px;
          margin-right: 2px;
        }

        .singer {
          float: left;
          color: #a6a6a6;
          display: inline-block;
        }
      }
      .describe {
        float: left;
        width: 280px;
        padding-top: 2px;
        i {
          display: inline-block;
          font-style: normal;
          position: relative;
          padding: 1px 1px 1px 2px;
          margin-right: 5px;
          text-align: center;
          color: hsl(360, 99%, 61%);
          .border-radius(6px);
        }

        span {
          color: #f6b622;
          &.font-color {
            color: #a6a6a6;
          }
        }
      }
    }
  }
}
</style>