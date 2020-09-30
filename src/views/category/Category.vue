<template>
    <!--  分类页面  -->
    <div class="cateGory">
        <!--      <search class="CateGorySearch"></search>-->
        <ElSearch placeholder="请输入商品名称" @on-click="queryByKey" ref="search" class="search"></ElSearch>
        <scroll class="content" ref="Scroll">
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
  import ElSearch from "../../components/common/ElSearch/ElSearch";
  import {getGoodsData} from "../../network/home";

  export default {
    name: "Category",
    components: {ElSearch, Scroll, SideCateGory, Search},
    data() {
      return {
        home: '首页',
        result: [],
        list: []
      }
    },
    methods: {
      queryByKey(val) {
        this.$store.state.goodsList = []
        console.log(val);
        let i = 0
        while (i < 10) {
          for (let item of this.result[i]) {
            if (item.title.includes(val)) {
              let ifExistGood = this.$store.state.goodsList.find(good => //good是遍历后里面找到的对象
                good.iid === item.iid //如果存在商品，则返回这个对象
              )
              if (!ifExistGood) { //有这个商品则是true,取反表示重复的不添加到列表里
                this.$store.state.goodsList.push(item)
                console.log(item)
              }
            }
          }
          i++
        }
        // setTimeout(()=>{
        this.$router.push('/SearchResult')
        // },1000)
      }
    },
    created() {
      getGoodsData('pop', 1).then(res => {
        this.result.push(res.data.list)
      })
      getGoodsData('pop', 2).then(res => {
        this.result.push(res.data.list)
      })
      getGoodsData('pop', 3).then(res => {
        this.result.push(res.data.list)
      })
      getGoodsData('pop', 4).then(res => {
        this.result.push(res.data.list)
      })
      getGoodsData('pop', 5).then(res => {
        this.result.push(res.data.list)
      })
      getGoodsData('new', 1).then(res => {
        this.result.push(res.data.list)
      })
      getGoodsData('new', 2).then(res => {
        this.result.push(res.data.list)
      })
      getGoodsData('new', 3).then(res => {
        this.result.push(res.data.list)
      })
      getGoodsData('sell', 1).then(res => {
        this.result.push(res.data.list)
      })
      getGoodsData('sell', 2).then(res => {
        this.result.push(res.data.list)
      })
      getGoodsData('sell', 3).then(res => {
        this.result.push(res.data.list)
      })
    }
  }
</script>

<style scoped>
    .cateGory {
        height: 100vh;
    }

    .CateGorySearch {
        position: relative;
        z-index: 7;
    }

    .content {
        height: calc(100% - 44px - 10vh);
    }

    .search {
        position: relative;
        z-index: 50;
        background-color: #fff;
    }
</style>