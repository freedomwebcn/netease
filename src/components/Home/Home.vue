<template>
  <div>
    <div class="home-swiper-container">
      <div class="swiper-wrapper">
        <!--发现 -->
        <div class="swiper-slide swiper-slide-find">
          <!-- 顶部搜索 -->
          <header>
            <div class="l-more iconfont icon-xianxinggengduo"></div>
            <div class="m-search">
              <i class="icon-search iconfont icon-sousuo"></i>
              <span @click="jumpSearch" class="jump-search">
                <input
                  type="text"
                  :placeholder="
                    placeholder ? placeholder : '你可能对这些音乐感兴趣'
                  "
                  disabled
                />
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
                v-for="(count, index) in bannerSwiperPaginationCount"
                :key="index"
                :class="index === bannerSwiperPaginationIndex ? 'swiper-pagination-customs-active':'swiper-pagination-customs'"
                class="banner-swiper-pagination"
              ></div>
            </div>
          </div>

          <div class="product-module">
            <ul class="swiper-wrapper product-list">
              <li class="swiper-slide product-item">
                <i class="iconfont icon-rili ico-product-item"></i>
                <span>每日推荐</span>
              </li>
              <li class="swiper-slide product-item">
                <i class="iconfont icon-diantaizhibo ico-product-item"></i>
                <span>私人FM</span>
              </li>
              <li class="swiper-slide product-item">
                <i class="iconfont icon-gedan ico-product-item"></i>
                <span>歌单</span>
              </li>
              <li class="swiper-slide product-item">
                <i class="iconfont icon-paixingbang ico-product-item"></i>
                <span>排行榜</span>
              </li>
              <li class="swiper-slide product-item">
                <i class="iconfont icon-zhibo5 ico-product-item"></i>
                <span>直播</span>
              </li>
              <li class="swiper-slide product-item">
                <i class="iconfont icon-zhuanjiguangpan ico-product-item"></i>
                <span>数字专辑</span>
              </li>
              <li class="swiper-slide product-item">
                <i class="iconfont icon-lotus ico-product-item"></i>
                <span>冥想</span>
              </li>
              <li class="swiper-slide product-item">
                <i class="iconfont icon-changge ico-product-item"></i>
                <span>歌房</span>
              </li>
              <li class="swiper-slide product-item">
                <i class="iconfont icon-ziyuan1 ico-product-item"></i>
                <span>游戏</span>
              </li>
            </ul>
          </div>
          <div class="line"></div>
          <!-- 推荐歌单 -->
          <!-- <div class="recommend-playlist">
            <h3 class="l-title" style="height:50px">推荐歌单</h3>
            <span class="r-more">更多</span>
            <Playlist></Playlist>
          </div>-->
          <!-- <Playlist></Playlist> -->
        </div>

        <!-- 我的 -->
        <div class="swiper-slide swiper-slide-personal">Slide 2</div>
        <!-- 云村 -->
        <div class="swiper-slide swiper-slide-community">Slide 3</div>
      </div>
    </div>
    <FooterTabBar :slideIndex="slideIndex" v-on:tabChangeIndex="tabChangeIndex"></FooterTabBar>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import Swiper from "swiper/js/swiper.js";
import Playlist from "@/public_components/Playlist";
import FooterTabBar from "@components/FooterTabBar/FooterTabBar";

export default {
  data() {
    return {
      slideIndex: 0,
      placeholder: "",
      // 分页器数量
      bannerSwiperPaginationCount: 0,
      // 当前分页器索引
      bannerSwiperPaginationIndex: 0
    };
  },
  mounted() {
    this._initHomeSwiper();
    this._initBannerSwiper();
    this._initProductModule();
    this.$nextTick(() => {
      //Vue异步更新界面 如果不在这个回调函数中调用，到时候无法获取到DOM元素
      this.setSwiperPaginationContainerWidth();
    });

    // this.changeInputPlaceholder()
  },

  computed: {},

  methods: {
    // 初始化整个Home页面的swiper
    _initHomeSwiper() {
      this.homeSwiper = new Swiper(".home-swiper-container", {
        resistanceRatio: 0, //取消回弹
        on: {
          // slideChange 页面切换后执行
          slideChange: () => {
            this.slideIndex = this.homeSwiper.activeIndex;
          }
        }
      });
    },

    // 初始化轮播
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
            // total : 分页器总数
            // current: 当前激活的分页器下标 从 1 开始
            this.bannerSwiperPaginationCount = total;
            this.bannerSwiperPaginationIndex = current - 1;
          }
        },
        spaceBetween: 20
      });
    },
    // 初始化产品模块
    _initProductModule() {
      this.productModuleSwiper = new Swiper(".product-module", {
        spaceBetween: 20,
        slidesPerView: "auto",
        resistanceRatio: 0.6,
        freeMode: true
      });
    },
    // 设置分页器容器宽度
    setSwiperPaginationContainerWidth() {
      // 获取分页器容器中的子元素
      const swiperPaginationChildrens = Array.from(
        this.$refs.swiperPaginationContainer.children
      );
      const swiperPaginationChild = swiperPaginationChildrens[0];
      // 获取分页器容器中第一个子元素的宽度 + 右外边距
      const getMargin =
        getComputedStyle(swiperPaginationChild).marginRight.slice(0, -2) * 1;
      const getWidth = swiperPaginationChild.clientWidth;
      const swiperPaginationChildrensSize =
        (getMargin + getWidth) * swiperPaginationChildrens.length -
        getMargin +
        "px";
      // 设置分页器容器的宽度
      this.$refs.swiperPaginationContainer.style.width = swiperPaginationChildrensSize;
    },
    // tab 切换后的index值
    tabChangeIndex: function(tabIndex) {
      // tabIndex : tab底栏切换后的index值
      // 移动到对应的 slide 页
      this.homeSwiper.slideTo(tabIndex, 0, false);
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
    Playlist,
    FooterTabBar
  }
};
</script>

<style lang="less" scoped>
.home-swiper-container {
  width: 100%;
  height: calc(100vh - 61px);
  .swiper-wrapper {
    .swiper-slide {
    }
    // 发现页面 
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
        // 分页器容器
        .swiper-pagination-container {
          display: flex;
          justify-content: center;
          height: 3px;
          left: 50%;
          transform: translateX(-50%);
          // background-color: black;
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
            // 分页器激活的样式
            &.swiper-pagination-customs-active {
              background-color: rgb(255, 255, 255);
            }
          }
        }
      }
      .product-module {
        width: 375px;
        height: 65px;
        overflow: hidden;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-left: 10px;
        padding-right: 12px;
        .product-list {
          display: flex;
          align-items: center;
          .product-item {
            width: 45px;
            height: 65px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            span {
              white-space: nowrap;
            }
            .ico-product-item {
              display: flex;
              width: 100%;
              height: 45px;
              align-items: center;
              justify-content: center;
              flex: none;
              margin-bottom: 5px;
              border-radius: 50%;
              font-size: 25px;
              background-color: #fff1f1;
              color: #fe3a3b;
            }
            &:last-child {
              margin-right: 0 !important;
            }
          }
        }
      }
      .line {
        height: 1px;
        background-color: #f5f5f5;
      }
    }
    // 我的
    .swiper-slide-personal {
      padding: 0 10px 0 10px;
      background-color: rgb(11, 240, 99);
    }
    // 云村
    .swiper-slide-community {
      background-color: rgb(248, 13, 178);
    }
  }
}
</style>
