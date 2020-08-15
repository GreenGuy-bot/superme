<template>
<!--  封装好的底部导航栏框架组件   -->
    <div id="tabBar">
       <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "tabber"
  }
</script>

<style scoped>
    #tabBar {
        display: flex;
        background: #f6f6f6;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -1px 10px rgba(100, 100, 100, 0.32);
    }

</style>