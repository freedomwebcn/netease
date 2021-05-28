<template>
  <div>
    <div class="playlist">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in playlistInfo" :key="index">
          <div class="playlist-info">
            <i class="iconfont icon-play">{{item.playCount | formatPlayCount}}</i>
            <img :src="item.picUrl" alt />
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import "swiper/css/swiper.min.css";
import Swiper from "swiper/js/swiper.js";
import "@/tools/filter.js";
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
      const mySwiper = new Swiper(".playlist", {
        observer: true,
        observeSlideChildren: true,
        spaceBetween: 10,
        slidesPerView: "auto",
        resistanceRatio: 0.6,
        freeMode: true,
        freeModeMomentumBounce: false,
        freeModeMinimumVelocity:0.2
        
      });
    }
  }
};
</script>

<style lang="less" scoped>
.playlist {
  height: 145px;
  padding-left: 15px;
  padding-right: 15px;
  overflow: hidden;

  .swiper-wrapper {
    margin-top: 5px;
    .swiper-slide {
      border-radius: 10px;
      width: 100px;
      // height: 100px;
      &::before {
        content: "";
        display: block;
        width: 92px;
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
          padding-top: 2px;
          padding-bottom: 2px;
          font-size: 12px;
          padding-left: 3px;
          padding-right: 3px;
          border-radius: 15px;
        }

        img {
          width: 100%;
          height: 100px;
          border-radius: 10px;
        }
        p {
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