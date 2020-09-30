<template>
    <div class="search">
        <nav-bar>
            <div slot="center">
                为您找到以下结果
            </div>
        </nav-bar>
        <goods-lists :goods="list"></goods-lists>
    </div>
</template>

<script>
  import GoodsLists from "../../../components/content/goods/goodsLists";
  import NavBar from "../../../components/common/navTab/NavBar";

  export default {
    name: "SearchResult",
    components: {NavBar, GoodsLists},
    data() {
      return {
      }
    },
    props: {},
    computed: {
      list(){
        return this.$store.state.goodsList
      }
    }
  }
</script>

<style scoped>
    .search {
        height: 100vh
    }
</style>