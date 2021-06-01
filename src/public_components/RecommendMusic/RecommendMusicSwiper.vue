<template >
  <div>
    <div class="random-song-swiper" ref="musicSwiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide song-container slide-1 ref='songContainer'"
          v-for="(randomSongInfoArr,index) in recommendMusicData"
          :key="index"
        >
          <div
            class="song-info-container clear-fix mt"
            v-for="(songInfo,index) in randomSongInfoArr"
            :key="index"
            :data-id="`${songInfo && songInfo.id}`"
          >
            <!-- <template v-if="songInfo"> -->
            <img :src="`${songInfo.picUrl}?param=100y100`" alt />
            <div class="play-mask iconfont icon-bofang2" v-if="!songInfo.isShowMask"></div>
            <div class="cd-mask" v-else></div>
            <div
              class="song-info clear-fix"
              :class="`${songInfo.describe && songInfo.describe.isShow? 'line-h-25 pt':'line-h-50'}`"
              ref="songInfo"
            >
              <h3 class="song-name ellipsis">{{songInfo.songName}}</h3>
              <i class="separator">-</i>
              <span class="singer ellipsis">{{songInfo.artists}}</span>
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
            <!-- </template> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import Swiper from "swiper/js/swiper.js";
import { setSingerMaxWidth } from "@/tools/setW";

export default {
  props: {
    recommendMusicData: Array
  },
  data() {
    return {};
  },
  computed: {},
  watch: {
    recommendMusicData(newV) {
      this.$nextTick(() => {
        this._initMusicSwiper();
        /*必须把当前复用组件的ref引用传过去，不然获取到的是所有复用该组件的dom元素*/
        setSingerMaxWidth(this.$refs.songInfo);
        // console.log(this.$refs.musicSwiper);
        
      });
    }
  },
  mounted() {
    
  },

  methods: {
    _initMusicSwiper() {
      /* 这里同样也要把ref引用传进去，不能直接传ClASS，
      不然的话所有的复用组件实例 初始化的都是同一个Swiper，到时候会出现各种问题 */
      this.mySwiper = new Swiper(this.$refs.musicSwiper, {
        slidesPerView: 'auto',
        resistanceRatio: 0 //取消回弹
      });
    }
  }
};
</script>


<style lang="less" scope>
@import "../../tools/border-1px.less";
.random-song-swiper {
  .song-container {
    .song-info-container {
      position: relative;

      .line {
        width: 276px;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 60px;
        top: 54px;

        // background-color: red;
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
        margin-right: 10px;
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
          padding-top: 3px;
        }
        // p元素没内容 父元素行高等于图片的高度， 有内容 行高是图片高度的一半
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
        }
        .separator {
          float: left;
          color: #a6a6a6;

          margin: 0 2px;
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