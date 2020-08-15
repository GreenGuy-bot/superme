<template>
    <div class="itemList">
        <div>
            <slot name="item-icon"></slot>
        </div>
        <div>
            <slot name="item-name"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "itemList",

  }
</script>

<style scoped>
    .itemList {
        flex: 1; /*块级元素等分*/
        text-align: center; /*块级元素内的位置居中*/
        height: 49px; /*大部分app功能块高度都是49px*/
        font-size: 14px;
        font-family: "Adobe 宋体 Std L",serif;
        font-weight: bold;
        color:#8a8a8a;
    }

    .itemList img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 1vh;
    }
</style>