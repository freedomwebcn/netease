<template>
  <!-- 歌单详情 -->
  <div class="palylist_content_wrapper">
    <div id="BScroll" class="bscroll">
      <header ref="header">
        fuck
      </header>

      <div class="bgc"></div>
      <!-- <img src="./bg.jpg" alt="" class="bgc"> -->

      <div class="clear_fix">
        11
      </div>
      <div class="mask" ref="mask">吸附效果</div>
      <!-- <div class="mask2" ref="mask2">吸附效果2222222</div> -->
      <ul class="content">
        <li>头部内容</li>
        <li class="bsscroll" ref="bs">吸附效果</li>
        <li class="xxxx" ref="test"></li>
        <li class="first" ref="first">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li ref="test2"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
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
    // 下边距
    let mb = getComputedStyle(this.$refs.test2).marginBottom.slice(0, -2) * 1
    let test2_H = this.$refs.test2.clientHeight + mb
    this.bs = new BScroll('#BScroll', {
      specifiedIndexAsContent: 4,
      probeType: 3,
      bounce: false
    })

    this.bs.on('scroll', position => {
      /*
        movingDirectionY
            类型：number
            作用：判断 bs 滑动过程中的方向（上下）。
            备注：-1 表示手指从上往下滑，1 表示从下往上滑，0 表示没有滑动。
      */
      //  从下往上滑
      if (this.bs.movingDirectionY == 1 && -position.y >= test2_H) {
        this.fixedTab()
      }

      //  从上往下滑
      if (this.bs.movingDirectionY == -1 && -position.y <= test2_H) {
        this.$refs.bs.style.display = 'block'
        this.$refs.test.style.display = 'none'
        this.$refs.mask.style.display = 'none'
        this.$refs.header.style.backgroundColor = 'black'
        this.$refs.header.style.opacity = '0.3'
        this.bs.refresh()
      }
    })

    this.bs.on('scrollEnd', () => {
      console.log(this.bs.y)
      if (-this.bs.y < Math.round(test2_H / 2)) {
        this.bs.scrollTo(0, 0, 400)
      } else if (-this.bs.y >= Math.round(test2_H / 2) && -this.bs.y <= test2_H) {
        console.log('滚动结束')
        this.bs.scrollTo(0, -test2_H, 600)
        this.fixedTab()
      }
    })
  },
  methods: {
    // 固定tab栏
    fixedTab() {
      this.$refs.header.style.backgroundColor = 'red'
      this.$refs.header.style.opacity = '1'
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
    }
  }
}
</script>
<style lang="less" scope>
.palylist_content_wrapper {
  height: 100vh;
  .bscroll {
    height: 100vh;
    overflow: hidden;
    header {
      width: 100vw;
      height: 80px;
      position: fixed;
      z-index: 999;
      background-color: black;
      opacity: 0.3;
    }
    .content {
      background-color: #ffff;
      position: relative;
      z-index: 99;
    }
    .mask {
      width: 100vw;
      height: 50px;
      position: absolute;
      z-index: 999;
      display: none;
      background-color: rgb(2, 253, 136);
    }

    .bgc {
      width: 100vw;
      height: 300px;
      background: url('./bg3.jpg');
      background-size: 100% 300px;
      position: fixed;
      z-index: 2;
      filter: blur(40px);
    }

    // .mask2 {
    //   width: 100vw;
    //   height: 50px;
    //   margin-bottom: 5px;
    //   display: none;
    // }
    .clear_fix {
      height: 80px;
    }
    ul {
      li {
        height: 50px;
        margin-bottom: 5px;
        background-color: rgb(2, 253, 136);
      }
    }
  }
}
</style>






