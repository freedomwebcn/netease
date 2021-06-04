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
          <div class="banner-container" ref="bannerContainer">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(banner,index) in resBannersData" :key="index">
                <img :src="banner.pic" alt />
              </div>
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination swiper-pagination-container" ref="swiperPaginationContainer">
              <div v-for="(count, index) in bannerSwiperPaginationCount" :key="index"
                :class="index === bannerSwiperPaginationIndex ? 'swiper-pagination-customs-active':'swiper-pagination-customs'"
                class="banner-swiper-pagination"></div>
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
          <RecommendPlaylist title="推荐歌单" :playlistData="recommendPlaylistData"></RecommendPlaylist>
        </div>
        <!-- 推荐的歌 -->
        <RecommendMusic :recommendMusicData="filterRecommendNewSongData"></RecommendMusic>
        <!-- 热门歌单 -->
        <RecommendPlaylist title="热门歌单" :playlistData="hotPlaylistData"></RecommendPlaylist>
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
              <RecommendMusicSwiper :recommendMusicData="filterRecommendNewSongData"></RecommendMusicSwiper>
            </div>

            <div class="new-cd-list">
              <RecommendMusicSwiper :recommendMusicData=" filterRecommendNewCdData"></RecommendMusicSwiper>
            </div>

            <div class="new-album-list">
              <RecommendMusicSwiper :recommendMusicData="filterRecommendNewAlbumData"></RecommendMusicSwiper>
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
          <div class="ranking-type-container" ref="topList">
            <div class="swiper-wrapper">
              <div class="swiper-slide ranking-type" v-for="(topListData,index) in filterTopListData" :key="index">
                <!-- 榜单 -->
                <div v-for="(topItem,index) in topListData" :key="index">
                  <div class="original-music">
                    <h3 class="original-music-title" :data-id="topItem.topListId">{{topItem.topListName}}</h3>
                  </div>
                  <div class="original-music-info-container clearfix"
                    v-for="(songInfo,index) in topItem.saveSongInfoArr" :key="index" :data-id="songInfo.id">
                    <img :src="`${songInfo.pic}?param=100y100`" alt />
                    <span class="original-music-sort">{{index + 1}}</span>
                    <div class="original-music-info">
                      <span class="original-music-name ellipsis">{{songInfo.name}}</span>
                      <i style="margin: 0 3px 0 3px" class="separator">-</i>
                      <span class="original-music-singer ellipsis">{{songInfo.singerName}}</span>
                    </div>
                    <i class="ico new"></i>
                  </div>
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
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper/js/swiper.js'
import RecommendPlaylist from '@/public_components/RecommendPlaylist/RecommendPlaylist'
import RecommendMusic from '@/public_components/RecommendMusic/RecommendMusic'
import RecommendMusicSwiper from '@/public_components/RecommendMusic/RecommendMusicSwiper'
import More from '@/public_components/More'
import _chunk from 'lodash/chunk'
import { setSingerMaxWidth } from '@/tools/setW'

import { reqBanner, reqRecommendPlaylist, reqRandomSong, reqHotPlaylist, reqNewCd, reqNewAlbum, reqTopList } from '@/api'
export default {
  components: {
    // FooterTabBar,
    RecommendPlaylist,
    RecommendMusic,
    RecommendMusicSwiper,
    More
  },
  data() {
    return {
      songDescribe: [
        { mark: '独家', describeText: '你好世界', isShow: true },
        { mark: 'SQ', describeText: '你好地球', isShow: true },
        { mark: '原创', describeText: '你好啊', isShow: true },
        { mark: '', describeText: '你好吗', isShow: true },
        { mark: '', describeText: '你好呀', isShow: true },
        { mark: '', describeText: '', isShow: false }
      ],
      // 页面切换后的索引
      slideIndex: 0,
      placeholder: '',
      // 分页器数量
      bannerSwiperPaginationCount: 0,
      // 当前分页器索引
      bannerSwiperPaginationIndex: 0,
      // 禁止触摸滑动
      allowTouchMove: true,
      // newMusicListIsShow: 0,
      show: false,
      // banner数据
      resBannersData: [],
      // 推荐的歌单数据
      recommendPlaylistData: [],
      // 推荐音乐
      recommendMusicData: [],
      // 热门歌单数据
      hotPlaylistData: [],
      // 新碟
      newCdData: [],
      // 新专辑
      newAlbumData: [],
      // 排行榜
      topListData: [],
      testarr: []
    }
  },

  async mounted() {
    this.init()
    // 轮播图数据
    const bannersData = await reqBanner({ type: 2 })
    this.resBannersData = bannersData.banners
    this.$nextTick(() => {
      this._initBannerSwiper()
    })
    // 推荐歌单数据
    const recommendPlaylistData = await reqRecommendPlaylist({ limit: 6 })
    this.recommendPlaylistData = recommendPlaylistData.result
    // 推荐的音乐
    const recommendMusicData = await reqRandomSong()
    this.recommendMusicData = recommendMusicData.result
    // 热门歌单
    const hotPlaylistData = await reqHotPlaylist()
    this.hotPlaylistData = hotPlaylistData.playlists
    // 排行榜
    const topListData = await reqTopList()
    topListData.forEach(async topList => {
      let r = await topList
      this.topListData.push(r.playlist)
    })
  },
  watch: {},
  computed: {
    filterRecommendNewSongData() {
      // debugger;
      const { recommendMusicData } = this
      if (!recommendMusicData.length) return
      let songArr = recommendMusicData.reduce((accumulator, currentValue) => {
        let str = ''
        currentValue.song.artists.forEach(item => {
          str += item.name + ' '
        })
        accumulator.push({
          id: currentValue.id,
          picUrl: currentValue.picUrl,
          songName: currentValue.name,
          artists: str,
          describe: this.songDescribe[Math.floor(Math.random() * 7)],
          isShowMask: false
        })
        return accumulator
      }, [])

      return _chunk(songArr, 3)
    },

    filterRecommendNewCdData() {
      const { newCdData } = this
      if (!newCdData.length) return
      let newCdArr = newCdData.reduce((accumulator, currentValue) => {
        accumulator.push({
          id: currentValue.id,
          picUrl: currentValue.picUrl,
          songName: currentValue.name,
          artists: currentValue.artist.name,
          describe: this.songDescribe[Math.floor(Math.random() * 7)],
          isShowMask: true
        })
        return accumulator
      }, [])
      return _chunk(newCdArr, 3)
    },

    filterRecommendNewAlbumData() {
      const { newAlbumData } = this
      if (!newAlbumData.length) return
      let newAlbumArr = newAlbumData.reduce((accumulator, currentValue) => {
        accumulator.push({
          id: currentValue.albumId,
          picUrl: currentValue.coverUrl,
          songName: currentValue.albumName,
          artists: currentValue.artistName,
          describe: this.songDescribe[Math.floor(Math.random() * 7)],
          isShowMask: true
        })
        return accumulator
      }, [])
      return _chunk(newAlbumArr, 3)
    },
    filterTopListData() {
      //排行榜数据
      const { topListData } = this
      if (!topListData.length) return
      let toplistInfoArr = topListData.reduce((accumulator, currentValue) => {
        //保存当前榜单内的歌曲信息
        let saveSongInfoArr = []
        //收集每首歌的信息
        let collectTopListSongInfo = {}
        //currentValue: 当前榜单
        //tracks数组: 当前榜单内所有的歌曲
        currentValue.tracks.slice(0, 3).forEach(topListSongInfo => {
          collectTopListSongInfo.name = topListSongInfo.al.name
          collectTopListSongInfo.id = topListSongInfo.id
          collectTopListSongInfo.singerName = ''
          collectTopListSongInfo.pic = topListSongInfo.al.picUrl
          // ar数组: 存放的是歌手名
          topListSongInfo.ar.forEach(singer => {
            collectTopListSongInfo.singerName += singer.name + '/'
          })
          //去除歌手名最后一个斜杠
          collectTopListSongInfo.singerName = collectTopListSongInfo.singerName.substring(0, collectTopListSongInfo.singerName.length - 1)
          //保存当前歌曲的信息
          saveSongInfoArr.push(collectTopListSongInfo)
          collectTopListSongInfo = {}
        })
        accumulator.push([
          {
            topListName: currentValue.name,
            topListId: currentValue.id,
            saveSongInfoArr
          }
        ])
        return accumulator
      }, [])

      this.$nextTick(() => {
        this._initRanking()
        setSingerMaxWidth(0, '.original-music-info')
      })
      return toplistInfoArr
    }
  },
  methods: {
    async newMusicTabChange(event) {
      let idx = event ? event.target.dataset.index : 0
      const newMusicTitleChildren = this.$refs.newMusicTitle.children
      const newMusicContentChildren = this.$refs.newMusicContent.children
      newMusicContentChildren.forEach((item, index) => {
        newMusicTitleChildren[index].classList.remove('on')
        item.style = 'display:none '
        newMusicTitleChildren[idx].classList.add('on')
        newMusicContentChildren[idx].style = 'display:block'
      })
      if (idx == 1 && !this.newCdData.length) {
        // 新碟
        const newCdData = await reqNewCd()
        this.newCdData = newCdData.albums
      }
      if (idx == 2 && !this.newAlbumData.length) {
        // 新专辑
        const newAlbumData = await reqNewAlbum()
        this.newAlbumData = newAlbumData.products
      }
    },
    init() {
      const fatherSwiper = new Swiper('.father', {
        resistanceRatio: 0 //取消回弹
      })

      this._initProductModule()
      this.newMusicTabChange()
    },

    // 初始化轮播
    _initBannerSwiper() {
      this.bannerSwiper = new Swiper(this.$refs.bannerContainer, {
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
          el: '.swiper-pagination',
          type: 'custom',
          renderCustom: (swiper, current, total) => {
            // total : 分页器总数
            // current: 当前激活的分页器下标 从 1 开始
            this.bannerSwiperPaginationCount = total
            this.bannerSwiperPaginationIndex = current - 1
          }
        }
      })
      this.$nextTick(() => {
        //Vue异步更新界面 如果不在这个回调函数中调用，到时候无法获取到DOM元素
        this.setSwiperPaginationContainerWidth()
      })
    },
    // 设置分页器容器宽度
    setSwiperPaginationContainerWidth() {
      // 获取分页器容器中的子元素
      const swiperPaginationChildrens = Array.from(this.$refs.swiperPaginationContainer.children)
      // 获取分页器容器中第一个子元素
      const swiperPaginationChild = swiperPaginationChildrens[0]
      const getMargin = getComputedStyle(swiperPaginationChild).marginRight.slice(0, -2) * 1
      const getWidth = swiperPaginationChild.clientWidth
      const swiperPaginationChildrensSize = (getMargin + getWidth) * swiperPaginationChildrens.length - getMargin + 'px'
      // 设置分页器容器的宽度
      this.$refs.swiperPaginationContainer.style.width = swiperPaginationChildrensSize
    },
    // 初始化产品模块
    _initProductModule() {
      this.productModuleSwiper = new Swiper('.product-module', {
        resistanceRatio: 0.6,
        slidesPerView: 'auto',
        spaceBetween: 25,
        freeMode: true,
        nested: true,
        freeModeMomentumBounce: false,
        freeModeMinimumVelocity: 0.2
      })
    },

    // 初始化排行榜
    _initRanking() {
      this.rankingSwiper = new Swiper(this.$refs.topList, {
        nested: true,
        spaceBetween: 11,
        slidesPerView: 'auto',
        observer: true,
        resistanceRatio: 0.6,
        slidesOffsetAfter: 20
      })
    }
  }
}
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
        height: 232px;
        padding: 15px 15px 0 15px;
        margin-top: 10px;
        margin-bottom: 10px;
        background-color: @bgColor;
        border-radius: 13px;
        .new-music-title {
          display: flex;
          margin-bottom: 0px;
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
                width: 200px;
                .ellipsis {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .original-music-name {
                  float: left;
                  max-width: 160px;
                }
                .separator {
                  float: left;
                }
                .original-music-singer {
                  float: left;
                }

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
                  background: url('./img/ddd.png') no-repeat center center;
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