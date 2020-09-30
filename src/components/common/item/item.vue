<template>
    <!--  封装的功能组件，可放一些小功能  -->
    <div id="item">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "item"
  }
</script>

<style scoped>
    #item {
        display: flex;
        background: #fff;
    }
</style>