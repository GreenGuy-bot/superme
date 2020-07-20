<template>
  <div id="app">
      <tab-bar-main></tab-bar-main>
    <router-view/>
  </div>
</template>
<style lang="less">
    @import "./assets/css/base.css";

</style>
<script>
  import TabBarMain from "./components/content/tabmain/MainTabBar";
  export default {
    components: {TabBarMain}
  }
</script>