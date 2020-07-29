<template>
  <div id="app">
   <keep-alive exclude="Detail"><router-view/></keep-alive>
      <tab-bar-main></tab-bar-main>
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