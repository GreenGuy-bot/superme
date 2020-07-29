<template>
<!--  封装好的标题的导航栏，包括三个插槽，主页可以根据使用或不使用  -->
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
    .nav-bar {
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100, 100, 100, 0.8);
        width:100%;

    }

    .left, .right {
        width: 60px;
    }

    .center {
        flex: 1;
    }
</style>