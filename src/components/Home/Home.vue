<template>
  <div>
    <div class="home-swiper-container">
      <div class="swiper-wrapper">
        <!--发现 -->
        <!-- 顶部搜索 -->

        <div style="height:50px">
          <header id="header">
            <div class="l-more iconfont icon-xianxinggengduo"></div>
            <div class="m-search">
              <i class="icon-search iconfont icon-sousuo"></i>
              <span class="jump-search">
                <input type="text" :placeholder=" placeholder  " disabled />
              </span>
            </div>
            <div class="r-rec iconfont icon-ziyuan"></div>
          </header>
        </div>
        <div class="swiper-slide swiper-slide-find" ref="scroll">
          <div style="height:55px; background:#ffff"></div>

          <div class="scroll-wrapper" id="scrollWrapper">
            <div class="content">
              <div class="bgc">
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
                <div></div>
                <div class="line border-bottom-1px"></div>
                <!-- 推荐歌单  -->
                <HotPlaylist title="推荐歌单"></HotPlaylist>
              </div>
              <!-- 随机推荐的歌 -->
              <div class="random-song" style="margin-bottom:10px">
                <div class="title">
                  <h3 class="title-text">
                    <i class="iconfont icon-xiangyouxuanzhuan"></i>
                    华语金曲点唱机
                  </h3>
                  <span class="play">
                    <i class="iconfont icon-bofang2"></i>

                    <span>播放</span>
                  </span>
                </div>
                <div class="random-song-swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide song-container slide1 ref='songContainer'">
                      <div class="song-info-container clearfix">
                        <img
                          src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                          alt
                        />
                        <div class="mask iconfont icon-bofang2"></div>
                        <div class="song-info">
                          <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
                          <h3 class="song-name ellipsis">童话话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天</h3>
                          <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
                        </div>
                        <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
                        <p class="describe">
                          <!-- <i>独家</i> -->
                          <span class="font-color">云音乐飙升榜</span>
                        </p>
                        <div class="line border-bottom-1px"></div>
                      </div>

                      <div class="song-info-container clearfix mt">
                        <img
                          src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                          alt
                        />
                        <div class="song-info">
                          <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
                          <h3 class="song-name ellipsis">童话童天的</h3>
                          <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
                        </div>
                        <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
                        <p class="describe">
                          <i class>独家</i>
                          <span>云音乐飙升榜</span>
                        </p>

                        <div class="line border-bottom-1px"></div>
                      </div>

                      <div class="song-info-container clearfix">
                        <img
                          src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                          alt
                        />
                        <div class="song-info">
                          <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
                          <h3 class="song-name ellipsis">童话童天的</h3>
                          <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
                        </div>
                        <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
                        <p class="describe">
                          <i>独家</i>
                          <span>云音乐飙升榜</span>
                        </p>
                      </div>
                    </div>

                    <div class="swiper-slide song-container slide2">
                      <div class="song-info-container clearfix">
                        <img
                          src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                          alt
                        />
                        <div class="mask iconfont icon-bofang2"></div>
                        <div class="song-info">
                          <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
                          <h3 class="song-name ellipsis">童话话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天</h3>
                          <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
                        </div>
                        <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
                        <p class="describe">
                          <!-- <i>独家</i> -->
                          <span class="font-color">云音乐飙升榜</span>
                        </p>
                        <div class="line border-bottom-1px"></div>
                      </div>

                      <div class="song-info-container clearfix mt">
                        <img
                          src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                          alt
                        />
                        <div class="song-info">
                          <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
                          <h3 class="song-name ellipsis">童话童天的</h3>
                          <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
                        </div>
                        <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
                        <p class="describe">
                          <i>独家</i>
                          <span>云音乐飙升榜</span>
                        </p>

                        <div class="line border-bottom-1px"></div>
                      </div>
                      <div class="song-info-container clearfix mt">
                        <img
                          src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                          alt
                        />
                        <div class="song-info">
                          <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
                          <h3 class="song-name ellipsis">童话童天的</h3>
                          <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
                        </div>
                        <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
                        <p class="describe">
                          <i>独家</i>
                          <span>云音乐飙升榜</span>
                        </p>

                        <div class="line border-bottom-1px"></div>
                      </div>
                    </div>
                    <div class="swiper-slide song-container slide3">
                      <div class="song-info-container clearfix">
                        <img
                          src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                          alt
                        />
                        <div class="mask iconfont icon-bofang2"></div>
                        <div class="song-info">
                          <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
                          <h3 class="song-name ellipsis">童话话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天</h3>
                          <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
                        </div>
                        <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
                        <p class="describe">
                          <!-- <i>独家</i> -->
                          <span class="font-color">云音乐飙升榜</span>
                        </p>
                        <div class="line border-bottom-1px"></div>
                      </div>
                      <div class="song-info-container mt clearfix">
                        <img
                          src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                          alt
                        />
                        <div class="mask iconfont icon-bofang2"></div>
                        <div class="song-info">
                          <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
                          <h3 class="song-name ellipsis">童话话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天</h3>
                          <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
                        </div>
                        <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
                        <p class="describe">
                          <!-- <i>独家</i> -->
                          <span class="font-color">云音乐飙升榜</span>
                        </p>
                        <div class="line border-bottom-1px"></div>
                      </div>
                      <div class="song-info-container clearfix">
                        <img
                          src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                          alt
                        />
                        <div class="mask iconfont icon-bofang2"></div>
                        <div class="song-info">
                          <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
                          <h3 class="song-name ellipsis">童话话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天</h3>
                          <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
                        </div>
                        <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
                        <p class="describe">
                          <!-- <i>独家</i> -->
                          <span class="font-color">云音乐飙升榜</span>
                        </p>
                        <div class="line"></div>
                      </div>
                    </div>
                    <div class="swiper-slide song-container slide4">
                      <div class="song-info-container clearfix">
                        <img
                          src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                          alt
                        />
                        <div class="mask iconfont icon-bofang2"></div>
                        <div class="song-info">
                          <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
                          <h3 class="song-name ellipsis">童话话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天</h3>
                          <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
                        </div>
                        <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
                        <p class="describe">
                          <!-- <i>独家</i> -->
                          <span class="font-color">云音乐飙升榜</span>
                        </p>
                        <div class="line border-bottom-1px"></div>
                      </div>
                      <div class="song-info-container mt clearfix">
                        <img
                          src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                          alt
                        />
                        <div class="mask iconfont icon-bofang2"></div>
                        <div class="song-info">
                          <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
                          <h3 class="song-name ellipsis">童话话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天</h3>
                          <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
                        </div>
                        <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
                        <p class="describe">
                          <!-- <i>独家</i> -->
                          <span class="font-color">云音乐飙升榜</span>
                        </p>
                        <div class="line border-bottom-1px"></div>
                      </div>
                      <div class="song-info-container clearfix">
                        <img
                          src="https://p2.music.126.net/THc2dGCHBcMLuRlwQjccFg==/109951165210824295.jpg"
                          alt
                        />
                        <div class="mask iconfont icon-bofang2"></div>
                        <div class="song-info">
                          <!-- 童话（冬天的记忆小巷里面吹过晚风） -->
                          <h3 class="song-name ellipsis">童话话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天话童话里面吹过晚风（冬天</h3>
                          <span class="singer ellipsis">- &nbsp;Santa_SA / 马也_Crabbit</span>
                        </div>
                        <!--  p元素没内容 动态设置行高等于图片的高度 有内容 行高是 图片高度的一半 -->
                        <p class="describe">
                          <!-- <i>独家</i> -->
                          <span class="font-color">云音乐飙升榜</span>
                        </p>
                        <div class></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <HotPlaylist title="你的专属歌单"></HotPlaylist>
            </div>
          </div>
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
import FooterTabBar from "@components/FooterTabBar/FooterTabBar";
import BScroll from "@better-scroll/core";

export default {
  components: {
    FooterTabBar,
    HotPlaylist
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
      allowTouchMove: true
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
      this.setScrollHeigh();
      this.bs = new BScroll(".scroll-wrapper", {
        click: true,
        // 设置横向为原生滚动
        eventPassthrough: "horizontal",
        // momentum:,
        bounce: false
      });
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
        on: {
          // slideChange 页面切换后执行
          slideChange: () => {
            this.slideIndex = this.homeSwiper.activeIndex;
          }
        }
      });

      this._initBannerSwiper();
      this._initProductModule();
      this._initRandomSongSwiper();
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

    // 初始化随机歌曲
    _initRandomSongSwiper() {
      this.randomSongSwiper = new Swiper(".random-song-swiper", {
        resistanceRatio: 0 //取消回弹
      });
      this.setMaxWidth();
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
        spaceBetween: 25,
        slidesPerView: "auto",
        resistanceRatio: 0.6,
        freeMode: true
      });
    },

    // tab 切换后的index值
    tabChangeIndex: function(tabIndex) {
      // tabIndex : tab底栏切换后的index值
      // 移动到对应的 slide 页
      this.homeSwiper.slideTo(tabIndex, 0, false);
    },
    // 设置类名singer最大宽度
    setMaxWidth() {
      const songInfoArr = Array.from(
        document.getElementsByClassName("song-info")
      );
      // debugger;
      songInfoArr.forEach((songInfo, index) => {
        // debugger;
        // 获取父元素总宽
        const songInfo_W = songInfo.clientWidth;
        // 获取子元素歌名的宽度
        const songName_W = songInfo.children[0].clientWidth;
        // 获取歌名的最大宽度
        const songNameMax_W = getComputedStyle(songInfo.children[0]).maxWidth;
        const formatSongNameMax_W = parseInt(songNameMax_W.slice(0, -2));
        if (songName_W < formatSongNameMax_W) {
          // 父容器的宽度减去歌名的宽度
          const set_W = songInfo_W - songName_W;
          // 设置歌手的最大宽度
          songInfo.children[1].style.maxWidth = set_W - 4 + "px";
          // songInfo.children[1].style.color = "red";
        } else {
          // 父容器宽度 减去歌名容器的最大宽 - 2个外边距
          const set_W = songInfo_W - formatSongNameMax_W - 4;
          songInfo.children[1].style.maxWidth = set_W + "px";
        }
      });
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
.home-swiper-container {
  width: 100%;
  height: calc(100vh - 61px);
  .swiper-wrapper {
    header {
      height: 50px;
      padding-left: 10px;
      padding-right: 10px;
      display: flex;
      align-items: center;
      text-align: center;
      position: fixed;
      z-index: 99999;
      width: 100%;
      background: #ffffff;

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
        // background-color: pink;
      }
    }

    .swiper-slide {
    }
    // 发现页面
    .swiper-slide-find {
      // height: calc(100vh - 50px);

      .content {
        // overflow: hidden;
      }

      .bgc {
        background: #ffffff;
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
        // 头部

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
          width: 375px;
          overflow: hidden;
          margin-bottom: 5px;
          padding: 12px 12px 0 10px;

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
              &:last-child {
                margin-right: 0 !important;
              }
            }
          }
        }
        .line {
          height: 1px;
          // background-color: #f5f5f5;
        }
      }

      .random-song {
        width: 375px;
        overflow: hidden;
        // height: 100px;
        padding-top: 20px;
        padding-left: 10px;
        padding-right: 10px;
        margin-top: 9px;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
        background: #ffffff;
        .title {
          display: flex;
          position: relative;
          margin-bottom: 10px;
          .title-text {
            flex: 1;
            font-weight: 700;
            font-size: 17px;
            i {
              font-weight: 700;
              font-size: 18px;
            }
          }
          .play {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 22px;
            position: absolute;
            right: 2px;
            top: -3px;
            padding-right: 2px;
            // padding-left: 3px;
            border: 1px solid #e6e6e6;
            border-radius: 15px;
            font-size: 12px;

            i {
            }
            .icon-bofang2 {
              color: #fe3a3b;
              font-size: 15px;
              // position: relative;
              // top: 0px;
            }
          }
        }
        .random-song-swiper {
          // background-color: #fe3a3b;
          // height: 200px;

          .song-container {
            .song-info-container {
              position: relative;

              .line {
                width: 280px;
                height: 1px;
                position: absolute;
                bottom: 0;
                left: 54px;
                top: 54px;
                // background-color: #eeeeee;
              }
              &.mt {
                margin-top: 10px;
                margin-bottom: 10px;
              }
              // height: 94px;
              img {
                width: 50px;
                height: 50px;
                float: left;
                border-radius: 8px;
                margin-right: 5px;
              }
              .mask {
                position: absolute;
                width: 50px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 8px;
                color: rgba(255, 255, 255, 0.705);
                font-size: 25px;
              }

              .song-info {
                width: 280px;
                float: left;
                // p元素没内容 行高等于图片的高度 有内容 行高是 图片高度的一半
                line-height: 25px;
                // 18
                // padding-top: 18px;
                .song-name {
                  // float: left;
                  float: left;
                  max-width: 230px;
                  // max-width: 200px;
                  font-size: 15px;
                  margin-right: 2px;
                }
                .singer {
                  // max-width: 48px;
                  float: left;
                  color: #a6a6a6;
                  display: inline-block;
                  //设置和歌名同样的高度 可以在不同屏幕下以这个基准值放大或缩小 和歌名垂直居中
                  // height: 15px;
                  // line-height: 15px;
                }
              }
              .describe {
                float: left;
                height: 20px;
                line-height: 20px;
                width: 280px;
                padding-top: 1px;

                i {
                  display: inline-block;
                  // width: 30px;
                  height: 16px;
                  line-height: 15px;
                  margin-right: 5px;
                  text-align: center;

                  border: 1px solid rgb(230, 55, 55);
                  color: hsl(360, 99%, 61%);
                  border-radius: 3px;
                }
                span {
                  color: #f6b622;
                  &.font-color {
                    color: #a6a6a6;
                  }
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
