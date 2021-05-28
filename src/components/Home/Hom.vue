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
