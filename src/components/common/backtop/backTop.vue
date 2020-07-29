<template>
<!--  一键回到顶部组件  -->
    <div class="backTop">
        <img src="@/assets/img/common/top.svg">
    </div>
</template>

<script>
  export default {
    name: "backTop"
  }
</script>

<style scoped>
    .backTop {
        position: absolute;
        right: 10px;
        bottom: 55px;
    }

    .backTop img {
        height: 41px;
        width: 41px;
    }
</style>