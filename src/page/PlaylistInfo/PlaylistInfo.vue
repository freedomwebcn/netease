<template>
  <!-- 歌单详情 -->
  <div class="palylist_content_wrapper">
    <div class="playlist_content" ref="playlistScroll">
      <header>2211212</header>
      <div class="clear_fix"></div>
      <ul>
        <li>

        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li><button @click=test>111</button></li>
        <li></li>
        <li></li>
        <li> </li>
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
export default {
  data() {
    return {
      scrollTop: 0
    }
  },
  computed: {
    playlistIndex() {
      return this.$route.query.id
    }
  },
  mounted() {
    this.test()
  },
  methods: {
    test() {
      //   console.log(this.$refs.playlistScroll.scrollTop)
      this.$refs.playlistScroll.addEventListener('touchmove', this.handleMove, false)
      //   el.addEventListener('touchend', handleEnd, false)
      this.$refs.playlistScroll.addEventListener('touchend', this.handleEnd, false)
    },
    handleMove(e) {
      this.scrollTop = this.$refs.playlistScroll.scrollTop
      console.log(this.$refs.playlistScroll.scrollTop)
    },
    handleEnd() {
      if (this.scrollTop < 40) {
        this.$refs.playlistScroll.scroll({ top: 0, behavior: 'smooth' })
      }
    }
  }
}
</script>

<style lang="less" scope>
.palylist_content_wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  //   background-color: rgb(40, 236, 14);

  .playlist_content {
    height: 100vh;
    overflow-y: scroll;
    // scroll-behavior: smooth;
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

    header {
      width: 100%;
      height: 80px;
      position: fixed;
      background: black;
      opacity: 0.4;
    }
    .clear_fix {
      width: 100%;
      height: 80px;
    }
    ul {
      li {
        width: 100%;
        height: 50px;
        background-color: red;
        margin-bottom: 5px;
      }
    }
  }
}
</style>