<template>
  <!-- 歌单详情 -->
  <div class="palylist_content_wrapper">
    <header ref="header">

    </header>
    <div class="bgc">
      <div class="bgc_img"></div>
    </div>

    <div class="clear_fix" ref="clear_fix">
      <span class="iconfont icon-xitongfanhui"></span>
      <span class="playlist">歌单</span>
      <span class="like">收藏</span>
      <span class="search iconfont icon-sousuo"></span>
      <span class="more iconfont icon-dashujukeshihuaico-"></span>
    </div>
    <div id="BScroll" class="bscroll" ref="bscrollContainer">

      <!-- <img src="./bg.jpg" alt="" class="bgc"> -->

      <div class="mask" ref="mask">吸附效果</div>
      <!-- <div class="mask2" ref="mask2">吸附效果2222222</div> -->
      <ul class="content" ref="content">
        <li class="header_content" ref="headerContent">
          <img src="./bg.jpg" alt="" class="playlist_pic">
          <div class="playlist_detail">
            <h3 class="playlist_name">爱自己是终生浪漫的开始</h3>
            <div class="about_author">
              <img src="./bg.jpg" alt="" class="playlist_author_pic">
              <h3 class="palylist_author">江户川柯南</h3>
              <span class="follow_author"> + </span>
            </div>
            <div class="about_playlist">
              <p class="left_content">你好世界</p>
              <span class="right_ico iconfont  icon-dayuhao"></span>
            </div>
          </div>

        </li>
        <li class="m_container" ref="mContainer">
          <div class="m_module">
          </div>
          <div class="clear_pos"></div>
          <div class="ad"></div>
        </li>

        <li class="bsscroll" ref="bs">
          吸附效果
        </li>
        <li class="xxxx" ref="test"></li>
        <li class="first" ref="first">1</li>
        <li>2</li>

        <li ref="test2">8</li>
        <li>2</li>
        <li>2</li>
        <!-- <div class="ssss" ref="ssss"></div> -->

      </ul>
    </div>

  </div>
</template>
<script>
import BScroll from '@better-scroll/core'

export default {
  data() {
    return {
      bs: null
    }
  },
  computed: {
    playlistIndex() {
      return this.$route.query.id
    }
  },
  mounted() {
    this.$refs.test.style.display = 'none'
    let headerContentHeight = this.getElHeight(this.$refs.headerContent)
    let mContainerHeight = this.getElHeight(this.$refs.mContainer)
    // 最小的滚动高度
    let mixScroll = headerContentHeight + mContainerHeight
    console.log(mixScroll, 'mix')

    this.bs = new BScroll('#BScroll', {
      specifiedIndexAsContent: 1,
      probeType: 3,
      bounce: false
    })

    if (-this.bs.maxScrollY <= mixScroll) {
      // 获取滚动容器的高度
      // let viewport_H = this.$refs.bscroll.clientHeight
      // let content_H = this.$refs.content.clientHeight
      // let result1 = viewport_H - content_H
      // let result2 = result1 + mixScroll
      // let result3 = content_H + result2

      let bsScroll_container_H = this.$refs.bscrollContainer.clientHeight

      this.$refs.content.style.height = bsScroll_container_H + mixScroll + 'px'
      this.bs.refresh()
    }
    console.log(this.bs.maxScrollY, 'max')
    this.bs.on('scroll', position => {
      // -1 表示手指从上往下滑，1 表示从下往上滑
      console.log(position.y)
      if (this.bs.movingDirectionY == 1 && -position.y >= parseInt(mixScroll)) {
        this.fixedTab()
      }

      //  从上往下滑
      if (this.bs.movingDirectionY == -1 && -position.y <= mixScroll) {
        this.$refs.bs.style.display = 'block'
        this.$refs.test.style.display = 'none'
        this.$refs.mask.style.display = 'none'
        this.$refs.header.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
        this.$refs.header.style.opacity = '0.2'
        this.bs.refresh()
      }
    })

    this.bs.on('scrollEnd', () => {
      console.log(this.bs.y)
      console.log('ScrollEND')
      if (-this.bs.y < headerContentHeight / 2) {
        this.bs.scrollTo(0, 0, 300)
      } else if (-this.bs.maxScrollY >= Math.round(mixScroll) && -this.bs.y <= mixScroll) {
        console.log('滚动结束')
        this.bs.scrollTo(0, -parseInt(mixScroll), 200)
        this.fixedTab()
      }
    })
  },

  methods: {
    // 固定tab栏
    fixedTab() {
      this.$refs.header.style.background = 'red'
      this.$refs.header.style.opacity = '2'

      /* 
        真实tab隐藏 
        在bs内容区中的tab元素，设置固定定位是没效果的 
        所以要用一个虚拟的tab栏，在满足条件时显示虚拟tab栏（固定定位），真实tab隐藏。
     */
      this.$refs.bs.style.display = 'none'
      //   显示虚拟tab
      this.$refs.mask.style.display = 'block'
      /* 
        真实tab隐藏后不占用文档流的位置
        它的下一个兄弟元素会顶上来，这里用一个没有内容的空元素，宽高和tab栏一样，占住位置。
    */
      this.$refs.test.style.display = 'block'
      this.bs.refresh()
    },
    getElHeight(el) {
      let el_mb = getComputedStyle(el).marginBottom.slice(0, -2) * 1
      let el_H = el.clientHeight + el_mb
      return el_H
    }
  }
}
</script>
<style lang="less" scope>
.palylist_content_wrapper {
  height: 100%;
  overflow: hidden;
  position: relative; //设置定位的子元素百分比参照对象是它的祖先元素，如果祖先元素没设置定位，参照物是视口。
  header {
    width: 100%;
    height: 60px;
    position: absolute;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 0.2;
  }

  .bgc {
    width: 375px;
    height: 300px;
    overflow: hidden; // 去除背景虚化的阴影
    position: fixed;
    z-index: 2;
    .bgc_img {
      width: 100%;
      height: 100%;
      background: url('./bg.jpg') center top;
      background-size: cover;
      position: relative;
      z-index: 9999;
      filter: blur(40px) grayscale(0.2) contrast(1) drop-shadow(0px 0px);
    }
  }

  .clear_fix {
    height: 60px;
    display: flex;
    width: 100%;
    padding: 0 10px;
    position: relative;
    z-index: 999;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: #ffff;

    .icon-xitongfanhui {
      font-size: 18px;
    }
    .playlist {
      margin-left: 15px;
      flex: 1;
    }

    .search {
      margin: 0 10px;
      font-size: 27px;
    }
    .more {
      font-size: 27px;
    }
  }
  .bscroll {
    width: 100%;
    height: calc(100% - 60px);
    overflow: hidden;

    .content {
      // background-color: #ffff;
      position: relative;
      z-index: 99;
    }
    .mask {
      width: 100%;
      height: 50px;
      position: absolute;
      z-index: 999;
      display: none;
      background-color: rgb(2, 253, 136);
    }

    // .mask2 {
    //   width: 100vw;
    //   height: 50px;
    //   margin-bottom: 5px;
    //   display: none;
    // }

    ul {
      li {
        height: 50px;
        margin-bottom: 5px;
        // background-color: #fff;
        // background-color: rgb(2, 253, 136);
      }
      .ssss {
        height: 661px;
        display: none;
      }
      .header_content {
        height: 100px;
        padding: 0 10px;
        margin-bottom: 36px;
        display: flex;
        .playlist_pic {
          width: 100px;
          height: 100px;
          border-radius: 13px;
          margin-right: 15px;
        }
        .playlist_detail {
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          padding: 5px 0 5px 0;
          color: #ffff;

          .playlist_name {
            flex: 1 100%;
            font-size: 14px;
          }
          .about_author {
            display: flex;
            flex: 1 100%;
            align-items: center;
            margin-left: -6px;
            color: rgba(203, 209, 212);
          }
          .playlist_author_pic {
            width: 23px;
            height: 23px;
            margin-right: 5px;
            border-radius: 50%;
          }
          .palylist_author {
          }
          .follow_author {
          }
          .about_playlist {
            display: flex;
            width: 100%;
            align-self: flex-end;
            align-items: center;
            color: rgba(203, 209, 212);
            .left_content {
              flex: 80%;
            }
            .right_ico {
            }
          }
        }
      }
      .m_container {
        height: 90px;
        width: 100%;
        padding: 0 10px;
        position: relative;
        background-color: rgb(255, 255, 255);
        .m_module {
          width: 280px;
          height: 40px;
          position: absolute;
          top: -20px;
          left: 50%;
          margin-left: -140px;
          border-radius: 20px;
          background-color: red;
        }
        .clear_pos {
          height: 40px;
        }
        .ad {
          height: 40px;
          background-color: cadetblue;
        }
      }
    }
  }
}
</style>






