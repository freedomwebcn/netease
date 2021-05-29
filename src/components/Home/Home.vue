<template>
  <div class="father">
    <div class="swiper-wrapper child">
      <!-- 头部搜索 -->
      <header id="header">
        <div class="l-more iconfont icon-xianxinggengduo" @click="show=true"></div>
        <div class="m-search">
          <i class="icon-search iconfont icon-sousuo"></i>
          <span class="jump-search">
            <input type="text" :placeholder=" placeholder  " disabled />
          </span>
        </div>
        <div class="r-rec iconfont icon-ziyuan"></div>
      </header>
      <!-- 侧边栏 -->
      <van-popup v-model="show" position="left" get-container="#app" duration="0.2">
        <div class="side">1</div>
      </van-popup>
      <!-- 发现 -->
      <div class="swiper-slide slide1 scw">
        <div class="clear-fixed"></div>
        <!-- 轮播 -->
        <div class="bgc">
          <div class="banner-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(banner,index) in resBannersData" :key="index">
                <img :src="banner.pic" alt />
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

          <!-- 产品 -->
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
          <!-- <div></div> -->
          <div class="line border-bottom-1px"></div>

          <!-- 推荐歌单  -->
          <RecommendPlaylist title="推荐歌单" :resRecommendPlaylist="resRecommendPlaylist"></RecommendPlaylist>
        </div>
        <!-- 随机推荐的歌 -->
        <RandomPlaylist :randomSongData='randomSongData'></RandomPlaylist>
        <!-- 根据登录用户推荐 -->
        <RecommendPlaylist title="你的雷达歌单"></RecommendPlaylist>
        <!-- 新音乐 -->
        <div class="new-music-container">
          <div class="new-music-title" ref="newMusicTitle">
            <div class="new-song" data-index="0" @click="newMusicTabChange($event)">新歌</div>
            <div class="new-cd" data-index="1" @click="newMusicTabChange($event)">新碟</div>
            <div class="new-album" data-index="2" @click="newMusicTabChange($event)">数字专辑</div>
            <div class="pos-style"></div>
            <More moreText="更多" class="new-music-more">
              <template #right>
                <i class="iconfont icon-dayuhao"></i>
              </template>
            </More>
          </div>
          <div class="new-music-content" ref="newMusicContent">
            <div class="new-song-list">
              <RandomplaylistSwiper songName="第一页"></RandomplaylistSwiper>
            </div>
            <div class="new-cd-list">
              <RandomplaylistSwiper songName="第二页"></RandomplaylistSwiper>
            </div>
            <div class="new-album-list">
              <RandomplaylistSwiper songName="第三页"></RandomplaylistSwiper>
            </div>
          </div>
        </div>
        <!-- 排行榜 -->
        <div class="ranking">
          <div class="ranking-title">
            <h3 class="title">排行榜</h3>
            <More moreText="更多">
              <template #right>
                <i class="iconfont icon-dayuhao"></i>
              </template>
            </More>
          </div>
          <div class="ranking-type-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide ranking-type">
                <!-- 原创音乐 -->
                <div class="original-music">
                  <h3 class="original-music-title">原创榜</h3>
                </div>
                <div class="original-music-info-container clearfix">
                  <img
                    src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                    alt
                  />
                  <span class="original-music-sort">1</span>
                  <div class="original-music-info">
                    <span class="original-music-name">黄金时代</span>
                    <i style="margin: 0 3px 0 3px">-</i>
                    <span class="original-music-singer">声音碎片乐队</span>
                  </div>
                  <i class="icofont"></i>
                </div>
                <div class="original-music-info-container clearfix">
                  <img
                    src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                    alt
                  />
                  <span class="original-music-sort">2</span>
                  <div class="original-music-info">
                    <span class="original-music-name">黄金时代</span>
                    <i style="margin: 0 3px 0 3px">-</i>
                    <span class="original-music-singer">声音碎片乐队</span>
                  </div>
                  <i class="icofont"></i>
                </div>
                <div class="original-music-info-container clearfix">
                  <img
                    src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                    alt
                  />
                  <span class="original-music-sort">3</span>
                  <div class="original-music-info">
                    <span class="original-music-name">黄金时代</span>
                    <i style="margin: 0 3px 0 3px" class="fz-style">-</i>
                    <span class="original-music-singer fz-style">声音碎片乐队</span>
                  </div>
                  <i class="ico new"></i>
                </div>
              </div>
              <div class="swiper-slide ranking-type">
                <div class="original-music">
                  <h3 class="original-music-title">日本榜</h3>
                </div>
                <div class="original-music-info-container clearfix">
                  <img
                    src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                    alt
                  />
                  <span class="original-music-sort">1</span>
                  <div class="original-music-info">
                    <span class="original-music-name">黄金时代</span>
                    <i style="margin: 0 3px 0 3px">-</i>
                    <span class="original-music-singer">声音碎片乐队</span>
                  </div>
                  <i class="icofont"></i>
                </div>
                <div class="original-music-info-container clearfix">
                  <img
                    src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                    alt
                  />
                  <span class="original-music-sort">1</span>
                  <div class="original-music-info">
                    <span class="original-music-name">黄金时代</span>
                    <i style="margin: 0 3px 0 3px">-</i>
                    <span class="original-music-singer">声音碎片乐队</span>
                  </div>
                  <i class="icofont"></i>
                </div>
                <div class="original-music-info-container clearfix">
                  <img
                    src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                    alt
                  />
                  <span class="original-music-sort">1</span>
                  <div class="original-music-info">
                    <span class="original-music-name">黄金时代</span>
                    <i style="margin: 0 3px 0 3px">-</i>
                    <span class="original-music-singer">声音碎片乐队</span>
                  </div>
                  <i class="icofont"></i>
                </div>
              </div>
              <div class="swiper-slide ranking-type">
                <!-- 原创音乐 -->
                <div class="original-music">
                  <h3 class="original-music-title">欧美榜</h3>
                </div>
                <div class="original-music-info-container clearfix">
                  <img
                    src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                    alt
                  />
                  <span class="original-music-sort">1</span>
                  <div class="original-music-info">
                    <span class="original-music-name">黄金时代</span>
                    <i style="margin: 0 3px 0 3px">-</i>
                    <span class="original-music-singer">声音碎片乐队</span>
                  </div>
                  <i class="icofont"></i>
                </div>
                <div class="original-music-info-container clearfix">
                  <img
                    src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                    alt
                  />
                  <span class="original-music-sort">1</span>
                  <div class="original-music-info">
                    <span class="original-music-name">黄金时代</span>
                    <i style="margin: 0 3px 0 3px">-</i>
                    <span class="original-music-singer">声音碎片乐队</span>
                  </div>
                  <i class="icofont"></i>
                </div>
                <div class="original-music-info-container clearfix">
                  <img
                    src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                    alt
                  />
                  <span class="original-music-sort">1</span>
                  <div class="original-music-info">
                    <span class="original-music-name">黄金时代</span>
                    <i style="margin: 0 3px 0 3px">-</i>
                    <span class="original-music-singer">声音碎片乐队</span>
                  </div>
                  <i class="icofont"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="swiper-slide slide2">
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
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import Swiper from "swiper/js/swiper.js";
import RecommendPlaylist from "@/public_components/RecommendPlaylist";
import RandomPlaylist from "@/public_components/RandomPlaylist";
import RandomplaylistSwiper from "@/public_components/RandomplaylistSwiper";
import More from "@/public_components/More";
import { reqBanner, reqRecommendPlaylist,reqRandomSong } from "@/api";
export default {
  components: {
    // FooterTabBar,
    RecommendPlaylist,
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
      // newMusicListIsShow: 0,
      show: false,
      resBannersData: [],
      resRecommendPlaylist: [],
      randomSongData:[]
    };
  },
  async mounted() {
    // 轮播图数据
    const bannersData = await reqBanner({ type: 2 });
    this.resBannersData = bannersData.banners;
    // 推荐歌单数据
    const recommendPlaylistData = await reqRecommendPlaylist({ limit: 6 });
    this.resRecommendPlaylist = recommendPlaylistData.result;
    const randomSongData = await reqRandomSong();
    this.randomSongData = randomSongData.result


    this.init();
  },
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
    init() {
      const fatherSwiper = new Swiper(".father", {
        resistanceRatio: 0 //取消回弹
      });

      this._initBannerSwiper();
      this._initProductModule();
      this.newMusicTabChange();
      this._initRanking();
    },

    // 初始化轮播
    _initBannerSwiper() {
      this.bannerSwiper = new Swiper(".banner-container", {
        observer: true,
        observeSlideChildren: true,
        resistanceRatio: 0, //取消回弹
        touchMoveStopPropagation: true,
        nested: true,
        loop: true,
        spaceBetween: 25,
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
        }
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
      // 获取分页器容器中第一个子元素
      const swiperPaginationChild = swiperPaginationChildrens[0];
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
        spaceBetween: 25,
        freeMode: true,
        nested: true,
        freeModeMomentumBounce: false,
        freeModeMinimumVelocity: 0.2
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
    }
  }
};
</script>

<style lang="less" scope>
@bgColor: #ffffff;
#app {
  .van-overlay {
    top: 1px;
  }
  .van-popup {
    .side {
      width: 80vw;
      height: 100vh;
      background-color: rgb(245, 245, 245);
    }
    overflow: hidden;
  }
}
.father {
  height: 100%;
  overflow-x: hidden;
  .child {
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

    .slide1 {
      height: 100%;
      width: 100%;
      //   background-color: rgb(247, 4, 97);
      overflow-y: scroll;
      overflow-x: hidden;
      //   chrome去除滚动条样式

      &::-webkit-scrollbar {
        display: none;
      }
      //   兼容火狐
      &.scw {
        scrollbar-width: none;
      }
      //   兼容IE10+
      &.msscw {
        -ms-overflow-style: none;
      }

      .clear-fixed {
        height: 50px;
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
          padding: 0 15px 0 14px;
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
      }

      .line {
        height: 1px;
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

      ul {
        li {
          width: 100px;
          height: 200px;
        }
      }
    }
    .slide2 {
      height: 100%;
      width: 100%;
      overflow-y: scroll;
      //   background-color: rgb(72, 255, 0);

      ul {
        li {
          width: 100px;
          height: 200px;
        }
      }
    }
  }
}
</style>