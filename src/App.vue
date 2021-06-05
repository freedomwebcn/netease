<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {},
  computed: {},

  components: {},
 
}
</script>
<style lang="less" scope>
@color: #f5f5f5;
#app {
  width: 100%;
  height: 100%;
  background-color: @color;
}
</style>
