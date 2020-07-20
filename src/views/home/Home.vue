<template>
    <!--  首页  -->
    <div id="home">
        <NavBar class="NavBar">
            <div slot="center">购物车</div>
        </NavBar>
        <HomeSwiper :banner="banner"></HomeSwiper>
        <recommend-view :recommend="recommend"></recommend-view>
        <TabControl class="tab-control" :title="['流行','新款','精选']"></TabControl>
        <goods-lists :goods="goods['pop'].list"></goods-lists>
        <div class="test"></div>
    </div>

</template>

<script>
  import NavBar from "../../components/common/navTab/NavBar";
  import {getHomeMainData, getGoodsData} from "../../network/home";
  import HomeSwiper from "./childcompons/HomeSwiper";
  import RecommendView from "./childcompons/RecommendView";
  import TabControl from "../../components/content/tabcontrol/TabControl";
  import GoodsLists from "../../components/content/goods/goodsLists";

  export default {
    name: "Home",
    components: {
      GoodsLists,
      TabControl,
      RecommendView,
      HomeSwiper,
      NavBar,
    },
    data() {
      return {
        banner: [],
        dKeyword: [],
        keywords: [],
        recommend: [],
        categoryId: [],
        result: '',
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        }
      }
    },
    created() {
      this.getHomeMainData();
      this.getGoodsData('pop')
      this.getGoodsData('new')
      this.getGoodsData('sell')
      // getGoodsData().then(res=>{
      //   this.result=res.data
      // })


    },
    methods: {
      getHomeMainData() {
        getHomeMainData().then(res => {
          this.banner = res.data.banner.list
          this.dKeyword = res.data.dKeyword
          this.keywords = res.data.keywords
          this.recommend = res.data.recommend.list
          console.log(res)//请求数据
        }).catch(err => {
          console.log(err)
        })
      },
      getGoodsData(type) {
        const page = this.goods[type].page + 1
        getGoodsData(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)//将数据库List数组传给上面的List
          this.goods[type].page += 1//push成功后，页码加一，下次添加数据为下一页

        })
      }
     }

    //拿到请求到的数据并下载
  // ,beforeDestroy(){
  //     function funDownload(content, filename) {
  //       let cont = JSON.stringify(content);
  //       // 创建隐藏的可下载链接
  //       var eleLink = document.createElement('a');
  //       eleLink.download = filename;
  //       eleLink.style.display = 'none';
  //       // 字符内容转变成blob地址
  //       var blob = new Blob([cont]);
  //       eleLink.href = URL.createObjectURL(blob);
  //       // 触发点击
  //       document.body.appendChild(eleLink);
  //       eleLink.click();
  //       // 然后移除
  //       document.body.removeChild(eleLink);
  //     };
  //     funDownload(this.result,'fule');
  //   }
  }
</script>

<style scoped>
    #home {
        padding-top: 44px;
        padding-bottom: 1000px;
    }

    .NavBar {
        background-color: var(--color-tint);
        color: #fff;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;/*优先级，数字越大优先级越高，覆盖在越前面*/
    }

    .tab-control {
        position: sticky; /*粘性固定，可以它固定在中间*/
        top: 44px;
        z-index: 7;
        background: #fff;

    }

    .test {
        margin-top: 777px;

    }

</style>