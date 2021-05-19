<template>
  <div id="app">
    <Home></Home>
  </div>
</template>
<script>
import Home from "@components/Home/Home";

export default {
  data() {
    return {
    };
  },
  mounted() {},
  methods: {
   
  },
  computed: {},

  components: {
    Home
  }
};
</script>
<style lang="less" scope>
@color: #f5f5f5;
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: @color ;
}
</style>
