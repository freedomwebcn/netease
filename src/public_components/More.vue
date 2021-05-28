<template>
  <span class="r-more">
    <slot name="left"></slot>
    <span>{{moreText}}</span>
    <slot name="right"></slot>
  </span>
</template>

<script>
export default {
  props: {
    moreText: String
  }
};
</script>
<style lang="less" scope>
@import "../tools/border-1px.less";
.r-more {
  display: flex;
  position: relative;
  top: -1px;
  padding: 3px 3px 3px 8px;
  font-size: 13px;
  .border-radius(26px, #ebebeb);

  i {
    font-size: 12px;
  }
}
</style>