<template>
  <div>
    <div class="home-swiper-container">
      <div class="swiper-wrapper">
        <!--发现 -->
        <!-- 顶部搜索 -->
        <!-- <header id="header">
          <div class="l-more iconfont icon-xianxinggengduo"></div>
          <div class="m-search">
            <i class="icon-search iconfont icon-sousuo"></i>
            <span class="jump-search">
              <input type="text" :placeholder=" placeholder  " disabled />
            </span>
          </div>
          <div class="r-rec iconfont icon-ziyuan"></div>
        </header> -->

        <div class="swiper-slide swiper-slide-find" ref="scroll">
          <!-- <div style="height:55px; background:#ffff"></div> -->
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
          </ul>
        </div>
        <!-- 我的 -->
        <div class="swiper-slide swiper-slide-personal">Slide 2</div>
        <!-- 云村 -->
        <div class="swiper-slide swiper-slide-community">Slide 3</div>
      </div>
    </div>
    <!-- Tab栏 -->
    <FooterTabBar :slideIndex="slideIndex" v-on:tabChangeIndex="tabChangeIndex" ref="footerTab"></FooterTabBar>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import Swiper from "swiper/js/swiper.js";
import HotPlaylist from "@/public_components/HotPlaylist";
import RandomPlaylist from "@/public_components/RandomPlaylist";
import RandomplaylistSwiper from "@/public_components/RandomplaylistSwiper";
import More from "@/public_components/More";

import FooterTabBar from "@components/FooterTabBar/FooterTabBar";
import BScroll from "@better-scroll/core";

export default {
  components: {
    FooterTabBar,
    HotPlaylist,
    RandomPlaylist,
    RandomplaylistSwiper,
    More
  },
  data() {
    return {
      // 页面切换后的索引
      slideIndex: 0,
      placeholder: "",
      // 分页器数量
      bannerSwiperPaginationCount: 0,
      // 当前分页器索引
      bannerSwiperPaginationIndex: 0,
      // 禁止触摸滑动
      allowTouchMove: true,
      newMusicListIsShow: 0
    };
  },
  mounted() {
    this._initHomeSwiper();

    this.$nextTick(() => {
      /*
          如果提前没有在css设置bs容器的高度
           那就要在初始化bs容器之前设置scroll容器的高度 
            如果在初始化bs之后再去设置高度，虽然在控制台审查元素，看似设置上去了，尽管内容比容器高，其实是无法滚动的
              原因就是bs不会自动检测容器的高度，它的高度是初始化bs对象的时候决定的（因为没有设置高度，scroll容器高度是由content子元素撑开的）
              或者可以在之后调用提供的api: refresh() 来重新统计高度就可以滑动了
      */
      // this.setScrollHeigh();
      // this.bs = new BScroll(".scroll-wrapper", {
      //   click: true,
      //   eventPassthrough: "horizontal",
      //   bounce: false,
      //   // stopPropagation: true,
      //   disableMouse: false,
      //   disableTouch: false,
      //   // swipeTime:1000,
      //   // swipeBounceTime:200
      // });
    });

    // this.changeInputPlaceholder()
  },

  computed: {},

  methods: {
    newMusicTabChange(event) {
      const idx = event ? event.target.dataset.index : 0;
      const newMusicTitleChildren = this.$refs.newMusicTitle.children;
      const newMusicContentChildren = this.$refs.newMusicContent.children;

      newMusicContentChildren.forEach((item, index) => {
        newMusicTitleChildren[index].classList.remove("on");
        item.style = "display:none";
        newMusicTitleChildren[idx].classList.add("on");
        newMusicContentChildren[idx].style = "display:block";
      });
    },

    // 初始化三个slide页面的swiper
    _initHomeSwiper() {
      this.homeSwiper = new Swiper(".home-swiper-container", {
        resistanceRatio: 0, //取消回弹
        allowTouchMove: this.allowTouchMove,
        touchMoveStopPropagation: true,

        on: {
          // slideChange 页面切换后执行
          slideChange: () => {
            this.slideIndex = this.homeSwiper.activeIndex;
          }
        }
      });
      // this._initBannerSwiper();
      // this._initProductModule();
      // this.newMusicTabChange();
      // this._initRanking();
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
      this.$nextTick(() => {
        //Vue异步更新界面 如果不在这个回调函数中调用，到时候无法获取到DOM元素
        this.setSwiperPaginationContainerWidth();
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

    // 初始化产品模块
    _initProductModule() {
      this.productModuleSwiper = new Swiper(".product-module", {
        resistanceRatio: 0.6,
        slidesPerView: "auto",
        spaceBetween: 15,
        freeMode: true,
        nested: true,
        freeModeMinimumVelocity: 0.1
      });
    },

    // 初始化排行榜
    _initRanking() {
      this.rankingSwiper = new Swiper(".ranking-type-container", {
        nested: true,

        spaceBetween: 11,
        slidesPerView: "auto",
        resistanceRatio: 0.6,
        slidesOffsetAfter: 20
      });
    },

    // tab 切换后的index值
    tabChangeIndex: function(tabIndex) {
      // tabIndex : tab底栏切换后的index值
      // 移动到对应的 slide 页
      this.homeSwiper.slideTo(tabIndex, 0, false);
    },

    changeInputPlaceholder() {
      let songNameArr = ["许巍", "老鹰乐队", "青花瓷", "故乡", "情人"];

      setInterval(() => {
        this.placeholder = songNameArr[Math.floor(Math.random() * 5)];
      }, 5000);
    },

    //设置页面滚动包裹容器 .scroll-wrapper 的高度
    setScrollHeigh() {
      const app_h = document.querySelector("#app").offsetHeight;
      const header_h = document.querySelector("#header").offsetHeight;
      const scrollWrapper = document.querySelector("#scrollWrapper");
      const footerTab_h = this.$refs.footerTab.$el.offsetHeight;
      scrollWrapper.style.height = app_h - header_h - footerTab_h + "px";
    }
  }
};
</script>

<style lang="less" scoped>
@bgColor: #ffffff;
.home-swiper-container {
  width: 100%;
  // height: calc(100vh - 61px);
  height: 100vh;
  .swiper-wrapper {
    header {
      height: 50px;
      padding-left: 15px;
      padding-right: 15px;
      display: flex;
      align-items: center;
      text-align: center;
      position: fixed;
      z-index: 99999;
      width: 100%;
      background: @bgColor;

      .l-more {
        width: 20px;
        height: 20px;
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
      }
    }
    .swiper-slide {
    }
    // 发现页面
    .swiper-slide-find {
      // height: calc(100vh - 50px);
      width: 100vh;
      height: 100vh;
      overflow-y: scroll;
      li{
        width: 100%;
        height: 50px;
        background-color: #fe3a3b;
      }
      .scroll-wrapper {
        // height: 556px;
        // overflow: hidden;

        height: 100%;
        overflow-y: scroll;
      }
      .bgc {
        background: @bgColor;
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
        // 轮播
        .banner-container {
          width: 100%;
          height: 146px;
          overflow: hidden;
          position: relative;
          padding: 0 15px 0 13px;
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

        // 产品模块
        @media screen and (max-width: 320px) {
          .product-module {
            height: 96px;
            .product-list {
              .product-item {
                span {
                  white-space: normal;
                }
              }
            }
          }
        }
        @media screen and (min-width: 330px) {
          .product-module {
            height: 79px;
            .product-list {
              .product-item {
                span {
                  white-space: nowrap;
                }
              }
            }
          }
        }
        .product-module {
          overflow: hidden;
          margin-bottom: 5px;
          padding: 12px 15px 0 15px;
          .product-list {
            .product-item {
              width: 45px;
              height: 65px;
              text-align: center;
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
            }
          }
        }

        .line {
          height: 1px;
        }
      }

      // 新音乐
      .new-music-container {
        padding: 15px 15px 0 15px;
        margin-top: 10px;
        margin-bottom: 10px;
        background-color: @bgColor;
        border-radius: 13px;
        .new-music-title {
          display: flex;
          margin-bottom: 15px;
          font-size: 17px;
          color: rgb(156, 156, 156);
          .on {
            color: black;
            font-weight: 700;
          }
          .new-cd {
            margin: 0 10px 0 10px;
          }
          .pos-style {
            flex: 1;
          }
          .new-music-more {
            color: black;
          }
        }
      }
      //  排行榜

      .ranking {
        height: 280px;
        padding: 15px 15px 0 15px;
        margin-bottom: 10px;
        background-color: #ffffff;
        border-radius: 13px;
        .ranking-title {
          display: flex;
          font-size: 17px;
          background-color: #ffffff;
          margin-bottom: 15px;
          .title {
            flex: 1;
          }
        }
        .ranking-type-container {
          .ranking-type {
            width: 328px;
            box-shadow: 0px 0px 10px rgb(238, 238, 238);
            border-radius: 8px;
            padding-top: 15px;
            padding-left: 10px;
            padding-right: 8px;

            .original-music {
              font-size: 18px;
              text-align: center;
              .original-music-title {
                font-weight: 700;
              }
            }
            .original-music-info-container {
              height: 50px;
              line-height: 50px;
              margin-bottom: 10px;

              img {
                width: 50px;
                height: 100%;
                float: left;
                border-radius: 8px;
              }
              .original-music-sort {
                float: left;
                font-size: 13px;
                font-weight: 700;
                margin: 0 10px 0 10px;
              }
              .original-music-info {
                float: left;
                font-size: 13px;
                .fz-style {
                  font-size: 12px;
                  color: #a7a7a7;
                }
              }
              .ico {
                width: 30px;
                height: 100%;
                float: right;
                &.new {
                  background: url("./img/ddd.png") no-repeat center center;
                  background-size: 26px 7px;
                  // background-color: #fe3a3b;
                }

                &.hot {
                }
                &.decrease-hot {
                }
                &.normal {
                }
              }
            }
          }
        }
      }
    }
    // 我的
    .swiper-slide-personal {
      padding: 0 10px 0 10px;
      overflow: hidden;
      background-color: rgb(11, 240, 99);
    }
    // 云村
    .swiper-slide-community {
      background-color: rgb(248, 13, 178);
    }
  }
}
</style>
