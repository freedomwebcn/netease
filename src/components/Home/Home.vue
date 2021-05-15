<template>
  <div>
    <div class="app-swiper-container">
      <div class="swiper-wrapper">
        <!--发现 -->
        <div class="swiper-slide swiper-slide-find">
          <!-- 顶部搜索 -->
          <header>
            <div class="l-more iconfont icon-xianxinggengduo"></div>
            <div class="m-search">
              <i class="icon-search iconfont icon-sousuo"></i>
              <span @click="jumpSearch" class="jump-search">
                <input type="text" :placeholder="placeholder?placeholder:'你可能对这些音乐感兴趣'" disabled />
              </span>
            </div>
            <div class="r-rec iconfont icon-ziyuan"></div>
          </header>
          <!-- 轮播 -->
          <div class="banner-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img
                  src="http://p1.music.126.net/7rYfKJKoIT6vi_kbzeR2TQ==/109951165974295616.jpg"
                  alt
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="http://p1.music.126.net/j618RbxQu03dOMwKctaiyg==/109951165975300062.jpg"
                  alt
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="http://p1.music.126.net/-Qv32LewRtWvE85uNlDMLg==/109951165975283734.jpg"
                  alt
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="http://p1.music.126.net/DhGemkvG6PWdKSgnmkSh7Q==/109951165975523779.jpg"
                  alt
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="http://p1.music.126.net/HiUfSuVL6LxpRfnIUkj1TQ==/109951165974974852.jpg"
                  alt
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="http://p1.music.126.net/gq26apb35rkNAALJsW_UhA==/109951165973754863.jpg"
                  alt
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="http://p1.music.126.net/ll8kxyHkKDflkY0BmE59Bw==/109951165975541600.jpg"
                  alt
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="http://p1.music.126.net/ZRIcQHSfJ5qJiJnJU5bBlw==/109951165975196925.jpg"
                  alt
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="http://p1.music.126.net/1o7jBIqdCIq2mlt5JOYCaw==/109951165974556044.jpg"
                  alt
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="http://p1.music.126.net/1Nvy2FYCiF1aEfgZR1cULw==/109951165974567008.jpg"
                  alt
                />
              </div>
            </div>
            <!-- 分页器 -->
            <div
              class="swiper-pagination swiper-pagination-container"
              ref="swiperPaginationContainer"
            >
              <div
                v-for="(count,index) in bannerSwiperPaginationCount "
                :key="index"
                :class="index === bannerSwiperPaginationIndex -1 ? 'swiper-pagination-customs-active':'swiper-pagination-customs'"
                class="banner-swiper-pagination"
              ></div>
            </div>
          </div>

          <h3 style="height:50px">推荐歌单</h3>
          <Playlist />
        </div>

        <!-- 我的 -->
        <div class="swiper-slide swiper-slide-personal">Slide 2</div>
        <!-- 云村 -->
        <div class="swiper-slide swiper-slide-community">Slide 3</div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import Swiper from "swiper/js/swiper.js";
import Playlist from "@/public_components/Playlist";

export default {
  data() {
    return {
      placeholder: "",
      // 分页器数量
      bannerSwiperPaginationCount: 0,
      // 当前分页器索引
      bannerSwiperPaginationIndex: 0
    };
  },
  mounted() {
    this._initAppSwiper();
    this._initBannerSwiper();

    // this.changeInputPlaceholder()
  },

  computed: {},

  methods: {
    _initAppSwiper() {
      this.swiper = new Swiper(".app-swiper-container", {
        resistanceRatio: 0, //取消回弹
        on: {
          // slideChange 页面切换后执行
          slideChange: () => {
            let slideIndex = this.swiper.activeIndex;
            this.$emit("slideIndex", slideIndex);
          }
        }
      });
    },
    // 初始化banner swiper
    _initBannerSwiper() {
      this.bannerSwiper = new Swiper(".banner-container", {
        resistanceRatio: 0, //取消回弹
        touchMoveStopPropagation: true,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          type: "custom",
          renderCustom: (swiper, current, total) => {
            this.bannerSwiperPaginationCount = total;
            this.bannerSwiperPaginationIndex = current;
          }
        },
        spaceBetween: 20
      });
      // DOM更新完成后获取分页器子项的宽度  ---- Vue异步更新界面
      this.$nextTick(() => {
        this.setSwiperPaginationContainerWidth();
      });
    },
    // 获取分页器中第一项的宽度 + 右外边距
    setSwiperPaginationContainerWidth() {
      let swiperPaginationChildrens = Array.from(
        this.$refs.swiperPaginationContainer.children
      );
      const swiperPaginationChild = swiperPaginationChildrens[0];
      // 获取分页容器子元素的右外边距
      const getMargin =
        getComputedStyle(swiperPaginationChild).marginRight.slice(0, -2) * 1;
      const getWidth = swiperPaginationChild.clientWidth;
      const swiperPaginationChildrensSize =
        (getMargin + getWidth) * swiperPaginationChildrens.length -
        getMargin +
        "px";
      // 设置分页容器大小
      this.$refs.swiperPaginationContainer.style.width = swiperPaginationChildrensSize;
    },

    jumpSearch() {
      console.log(111);
    },
    changeInputPlaceholder() {
      let songNameArr = ["许巍", "老鹰乐队", "青花瓷", "故乡", "情人"];

      setInterval(() => {
        this.placeholder = songNameArr[Math.floor(Math.random() * 5)];
      }, 5000);
    }
  },
  components: {
    Playlist
  }
};
</script>


<style lang="less" scoped>
.app-swiper-container {
  width: 100%;
  height: calc(100vh - 61px);
  .swiper-wrapper {
    .swiper-slide {
    }
    .swiper-slide-find {
      header {
        height: 50px;
        // background-color: aqua;
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        align-items: center;
        text-align: center;
        // position: fixed;
        width: 100%;

        // box-shadow: 1px 2px 20px #bfbfbf;
        .l-more {
          width: 20px;
          height: 20px;
          // background-color: red;
          font-size: 20px;
          font-weight: 600;
        }
        .m-search {
          flex: 1;
          height: 30px;
          position: relative;
          color: rgb(155, 155, 155);

          .icon-search {
            position: absolute;
            left: 23px;
            top: 4px;
            font-size: 22px;
          }
          .jump-search {
            input {
              width: 90%;
              height: 100%;
              padding-left: 28px;
              border-radius: 15px;
              line-height: normal;
              outline: none;
              border: 0;
              font-size: 15px;
              background-color: rgb(248, 248, 248);
            }
          }
        }
        .r-rec {
          .l-more();
          // background-color: pink;
        }
      }
      background-color: #ffffff;
      .banner-container {
        width: 100%;
        height: 146px;
        overflow: hidden;
        position: relative;
        padding: 0 15px 0 13px;
        margin-top: 5px;
        .swiper-wrapper {
          width: 100%;
          .swiper-slide {
            img {
              width: 100%;
              height: 100%;
              border-radius: 11px;
            }
          }
        }
        .swiper-pagination-container {
          display: flex;
          justify-content: center;
          height: 3px;
          left: 50%;
          transform: translateX(-50%);
          // background-color: black;
          // 分页器激活的样式
          .banner-swiper-pagination {
            width: 10px;
            height: 2px;
            border-radius: 30px;
            margin-right: 5px;
            &:last-child {
              margin-right: 0;
            }
            &.swiper-pagination-customs {
              background-color: rgba(245, 244, 247, 0.3);
            }
            &.swiper-pagination-customs-active {
              background-color: rgb(255, 255, 255);
            }
          }
        }
      }
    }

    .swiper-slide-personal {
      background-color: rgb(11, 240, 99);
    }
    .swiper-slide-community {
      background-color: rgb(248, 13, 178);
    }
  }
}
</style>