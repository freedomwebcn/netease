<template>
  <div id="app">
    <router-view></router-view>
    <button>1111111111111</button>
  </div>
</template>
<script>

export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {
    // querryPlaylistInfo(id) {
    //   this.$router.push({ path: `/playlist` })
    // },
    // querryPlaylistInfo2(id) {
    //   this.$router.push({ path: `/home` })
    // }
  },
  computed: {},

  components: {}
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
