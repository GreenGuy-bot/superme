<template>
    <ul>
        <slot></slot>
    </ul>
</template>

<script>
  export default{
    name:'hlMenu',
  }
</script>

<style lang="scss" scoped>
    ul{
        line-height: 55px;
        font-size: 16px;
        height: auto;
        margin-top: 25px;
        cursor: pointer;
    }
</style>