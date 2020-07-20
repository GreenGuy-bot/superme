<template>
    <div class="goods">
        <goods-lists-items v-for="item in goods" :goodsItem="item"></goods-lists-items>
    </div>
</template>

<script>
  import GoodsListsItems from "./goodsListsItems";
  export default {
    name: "goodsLists",
    components: {GoodsListsItems},
    props:{
      goods:{
        type:Array,
        default(){
          return[]
        }
      }
    }
  }
</script>

<style scoped>
  .goods{
      display: flex;
      flex-wrap: wrap;
  }
</style>