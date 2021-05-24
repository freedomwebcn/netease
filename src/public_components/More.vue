<template>
  <span class="r-more">
    <span>更多</span>
    <i class="iconfont icon-dayuhao"></i>
  </span>
</template>

<script>
export default {
  props:{
    moreText:String
  }
}
</script>
<style lang="less" scope>
.r-more {
  display: flex;
  position: absolute;
  right: 0;
  padding: 3px 3px 3px 8px ;
  font-size: 13px !important;
  &::after {
    content: "";
    position: absolute;
    left: 0;;
    top: -1px ;
    border: 1px solid #ebebeb;
    /* background-color: red; */
    width: 200%;
    height: 200%;
    border-radius: 26px;
    transform: scale(0.5);
    transform-origin: 0 0;
  }
  i {
    font-size: 12px;
  }
}
</style>