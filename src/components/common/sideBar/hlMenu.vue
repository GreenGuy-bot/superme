<template>
    <!--  侧边导航栏封装  -->
    <ul>
        <slot></slot>
    </ul>
</template>

<script>
  export default {
    name: 'hlMenu',
  }
</script>

<style lang="scss" scoped>
    ul {
        line-height: 55px;
        font-size: 16px;
        height: auto;
        margin-top: 2px;
        cursor: pointer;
    }
</style>