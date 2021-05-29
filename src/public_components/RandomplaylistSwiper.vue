<template>
  <div>
    <div class="random-song-swiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide song-container slide-1 ref='songContainer'"
          v-for="(randomSongInfoArr,index) in filterRandomSongData"
          :key="index"
        >
          <div
            class="song-info-container clear-fix mt"
            v-for="(songInfo,index) in randomSongInfoArr"
            :key="index"
            :data-id="songInfo.id"
          >
            <img :src="songInfo.picUrl" alt />
            <div class="play-mask iconfont icon-bofang2" v-if="songInfo.randomSong"></div>
            <div class="cd-mask" v-else></div>
            <div
              class="song-info pt"
              :class="`${songInfo.describe && songInfo.describe.isShow? 'line-h-25 ':'line-h-50'}`"
            >
              <h3 class="song-name ellipsis">{{songInfo.songName}}</h3>
              <span class="singer ellipsis">- &nbsp;{{songInfo.artists}}</span>
            </div>

            <p class="describe" v-if="songInfo.describe">
              <i class="ico" v-if="songInfo.describe.mark">{{songInfo.describe.mark}}</i>
              <span
                class="font-color"
                v-if="songInfo.describe.describeText"
              >{{songInfo.describe.describeText}}</span>
            </p>

            <div
              class="line border-bottom-1px"
              v-if="songInfo === randomSongInfoArr[randomSongInfoArr.length -1 ] ? false:true"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import Swiper from "swiper/js/swiper.js";
import _chunk from "lodash/chunk";

export default {
  props: {
    songName: String,
    randomSongData: Array
  },
  computed: {
    filterRandomSongData() {
      // debugger;
      const { randomSongData } = this;
      let songDescribe = [
        { mark: "独家", describeText: "你好世界", isShow: true },
        { mark: "SQ", describeText: "你好地球", isShow: true },
        { mark: "原创", describeText: "你好啊", isShow: true },
        { mark: "", describeText: "你好吗", isShow: true },
        { mark: "", describeText: "你好呀", isShow: true },
        { mark: "", describeText: "", isShow: false }
      ];

      if (randomSongData) {
        let randomSongArr = randomSongData.reduce(
          (accumulator, currentValue) => {
            let str = "";
            currentValue.song.artists.forEach(item => {
              str += item.name + " ";
            });

            accumulator.push({
              id: currentValue.id,
              picUrl: currentValue.picUrl,
              songName: currentValue.name,
              artists: str,
              describe: songDescribe[Math.floor(Math.random() * 7)],
              // // 区分每首歌所在的板块，控制遮罩的显示
              randomSong: true
            });
            return accumulator;
          },
          []
        );
        this.$nextTick(() => {
          this.setMaxWidth();
        });
        return _chunk(randomSongArr, 3);
      }
    }
  },
  mounted() {
    this._initRandomSongSwiper();
  },

  updated() {},
  methods: {
    // 初始化随机歌曲
    _initRandomSongSwiper() {
      this.randomSongSwiper = new Swiper(".random-song-swiper", {
        observer: true,
        observeSlideChildren: true,
        resistanceRatio: 0 //取消回弹
      });
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
        &.line-h-25 {
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