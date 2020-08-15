<template>
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