<template>
    <div class="cateGory">
      <search class="CateGorySearch"></search>
        <scroll class="content" ref="Scroll" >
        <side-Cate-gory :title="['热销商品','超值折扣','时尚','淑女','国风','BM风','情侣装','泫雅风',
        'JK制服','清新','衬衫','连衣裙','长裙','短裙','牛仔裤','吊带','宽松']"
        ></side-Cate-gory>
        </scroll>
    </div>
</template>

<script>

  import Search from "../../components/common/search/search";
  import SideCateGory from "../../components/content/cateGory/sideCateGory";
  import Scroll from "../../components/common/scroll/Scroll";
  export default {
    name: "Category",
    components: {Scroll, SideCateGory, Search}
  }
</script>

<style scoped>
    .cateGory{
        height: 100vh;
    }
   .CateGorySearch{
       position: relative;
       z-index: 7;
   }
    .content {
        height: calc(100% - 44px - 10vh);
    }
</style>