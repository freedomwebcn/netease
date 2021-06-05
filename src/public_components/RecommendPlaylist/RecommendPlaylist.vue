<template>
  <div class="recommend-playlist-container">
    <div class="recommend-playlist">
      <div class="title-text">
        <h3 class="l-title">{{title}}</h3>
        <More moreText="更多">
          <template #right>
            <i class="iconfont icon-dayuhao"></i>
          </template>
        </More>
      </div>
    </div>
    <div class="playlist" ref="playlistSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :data-id="item.id" v-for="(item,index) in playlistData" :key="index"
          @click="querryPlaylistInfo(item.id)">
          <div class="playlist-info">
            <i class="iconfont icon-play">{{item.playCount | formatPlayCount}}</i>
            <img :src="`${item.picUrl || item.coverImgUrl}?param=200y200`" alt />
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper/js/swiper.js'
import '@/tools/formatPlayCount.js'
import More from '@/public_components/More'

export default {
  props: {
    title: String,
    playlistData: Array
  },
  components: {
    More
  },
  data() {
    return {
      scrollTop: 0
    }
  },
  watch: {
    playlistData() {
      this.$nextTick(() => {
        this._iniPlaylistSwiper()
      })
    }
  },
  mounted() {},
  methods: {
    _iniPlaylistSwiper() {
      const mySwiper = new Swiper(this.$refs.playlistSwiper, {
        spaceBetween: 10,
        slidesPerView: 'auto',
        resistanceRatio: 0.6,
        freeMode: true,
        freeModeMomentumBounce: false,
        freeModeMinimumVelocity: 0.2
      })
    },
    // 根据歌单ID 查询歌单内的所有歌曲
    querryPlaylistInfo(id) {
      this.$router.push({ path: `/playlist`, query: { id } })
    }
  }
}
</script> 

<style lang="less" scoped>
.recommend-playlist-container {
  background: #ffffff;
  border-top-right-radius: 13px;
  border-top-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 13px;
  .recommend-playlist {
    .title-text {
      display: flex;
      position: relative;
      padding: 15px 15px 8px 15px;
      .l-title {
        flex: 1;
        font-size: 17px;
        font-weight: 700;
      }
    }
  }
  .playlist {
    height: 145px;
    padding-left: 15px;
    padding-right: 15px;
    overflow: hidden;

    .swiper-wrapper {
      // margin-top: 5px;
      .swiper-slide {
        border-radius: 10px;
        width: 100px;
        // height: 100px;
        &::before {
          content: '';
          display: block;
          width: 92px;
          height: 10px;
          background-color: #f2f2f2;
          // background-color: red;
          position: absolute;
          top: 1px;
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
            top: 8px;
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
            margin-top: 5px;

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
}
</style>