<template>
<!--  商品列表的外部组件，获取home里的数据并传给子组件，再遍历商品列表组件   -->
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