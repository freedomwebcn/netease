<template>
  <div>
    <div class="playlist">
     
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="playlist-info">
            <i class="iconfont icon-play">11</i>
            <img src="https://p2.music.126.net/zyiAnTJpsfHPSPVCVPXSEA==/109951165764984626.jpg" alt />
            <p>歌单名歌单名字歌单名字歌单名字歌单名字歌单名字字</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="playlist-info">
            <i class="iconfont icon-play">65565</i>
            <img src="https://p2.music.126.net/fob5pHV3xzGlJ_-KEeLFLg==/109951165693966983.jpg" alt />
            <p>歌单单名单名单名名字</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="playlist-info">
            <i class="iconfont icon-play">956589</i>
            <img src="https://p2.music.126.net/8gx1rLiemXwoKE6fKyq8PA==/109951165291292392.jpg" alt />
            <p>歌单单名单名单名单名名字</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="playlist-info">
            <i class="iconfont icon-play">1555</i>
            <img src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg" alt />
            <p>歌单名单名单名单名单名字</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="playlist-info">
            <i class="iconfont icon-play">2222233</i>
            <img src="https://p2.music.126.net/5ZGoG1vfDhp87eDdMgnIyg==/109951165827587074.jpg" alt />
            <p>歌单名字</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="playlist-info">
            <i class="iconfont icon-play">666666</i>
            <img src="https://p2.music.126.net/kOwruiTgpTyUVJ_m6uCqJw==/109951165969903755.jpg" alt />
            <p>歌单单名单名单名单名单名单名单名单名单名名字</p>
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
    playlistInfo: Array
  },
  data() {
    return {};
  },
  mounted() {
    this._initSwiper();
  },
  methods: {
    _initSwiper() {
      var mySwiper = new Swiper(".playlist", {
        // loop: true, // 循环模式选项
        spaceBetween: 10,
        resistanceRatio: 0.6,
        slidesPerView: 3.5,
        // touchMoveStopPropagation: true,
        freeMode: true,
        freeModeMinimumVelocity: 0.1
      });
    }
  }
};
</script>

<style lang="less" scoped>
.playlist {
  height: 145px;
  padding-left: 10px;
  padding-top: 14px;
  overflow: hidden;
  .swiper-wrapper {
    .swiper-slide {
      border-radius: 10px;
      height: 100px;
      &::before {
        content: "";
        display: block;
        width: 89px;
        height: 10px;
        background-color: #f2f2f2;
        position: absolute;
        top: -4px;
        left: 4px;
        z-index: -9999;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
      }
      .playlist-info {
        width: 100%;
        overflow: hidden;
        position: relative;
        i {
          position: absolute;
          color: #ffffff;
          right: 5px;
          top: 4px;
          background-color: rgba(0, 0, 0, 0.3);
          height: 13px;
          font-size: 12px;
          padding-left: 2px;
          padding-right: 2px;
          border-radius: 15px;
        }

        img {
          width: 100%;
          height: 100px;
          border-radius: 10px;
        }
        p {
          width: 100px;
          overflow: hidden;
          display: -webkit-box;
          position: relative;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          line-height: 16px;
        }
      }
      &:last-child {
        margin-right: 0 !important;
      }
    }
  }
}
</style>