<template>
  <div>
    <div class="father">
      <div class="swiper-wrapper">
        <div class="swiper-slide slide1">
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
        <div class="swiper-slide slide2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.min.css";
import Swiper from "swiper/js/swiper.js";

import FooterTabBar from "@components/FooterTabBar/FooterTabBar";

export default {
  components: {
    FooterTabBar
  },
  data() {
    return {};
  },
  mounted() {
    this._initHomeSwiper();
  },

  computed: {},

  methods: {
    // 初始化三个slide页面的swiper
    _initHomeSwiper() {
      this.homeSwiper = new Swiper(".father", {
        resistanceRatio: 0, //取消回弹
        on: {
          // slideChange 页面切换后执行
          slideChange: () => {
            this.slideIndex = this.homeSwiper.activeIndex;
          }
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@bgColor: #ffffff;

.father {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    .slide1 {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      ul {
        li {
            width: 100%;
          height: 200px;
          background-color: rgb(252, 236, 15);
        }
      }
    }
  }
}
</style>
