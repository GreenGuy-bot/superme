<template>
    <!--  首页  -->
    <div id="home">
        <NavBar class="NavBar">
            <div slot="center">与天商城</div>
        </NavBar>
        <TabControl class="tab-control" :title="['流行','新款','精选']"
                    ref="tabControlNew" @tabClick="onTabClick" v-show="ifTabShow"></TabControl>
        <Scroll class="content" ref="Scroll" :probe-type='3' :pull-up-load="true"
                @scroll="scrollPosition" @pullingUp="loadMore">
            <HomeSwiper :banner="banner" @swiperImageLoad="SwiperImageLoad"></HomeSwiper>
            <recommend-view :recommend="recommend"></recommend-view>
            <TabControl :title="['流行','新款','精选']"
                        ref="tabControl" @tabClick="onTabClick"></TabControl>
            <goods-lists :goods="showGoods"></goods-lists>
        </Scroll>
        <back-top @click.native="topClick" v-show="ifShow"></back-top>
    </div>

</template>

<script>
  import NavBar from "../../components/common/navTab/NavBar";
  import {getHomeMainData, getGoodsData} from "../../network/home";
  import HomeSwiper from "./childcompons/HomeSwiper";
  import RecommendView from "./childcompons/RecommendView";
  import TabControl from "../../components/content/tabcontrol/TabControl";
  import GoodsLists from "../../components/content/goods/goodsLists";
  import Scroll from "../../components/common/scroll/Scroll";
  import {backTopMix} from '../../commonjs/mixin'

  export default {
    name: "Home",
    mixins: [backTopMix],//混入对象，复用backTop属性和方法
    components: {
      Scroll,
      GoodsLists,
      TabControl,
      RecommendView,
      HomeSwiper,
      NavBar,
    },
    data() {
      return {
        banner: [],
        recommend: [],
        result: '',
        goodType: 'pop', //当前类型
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        ifTabShow: false,
        tabOffsetTop: 0,
        saveY: 0
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
    mounted() {
      //接收图片加载事件
      // this.$bus.$on('imageLoad',()=>{
      //   this.$refs.Scroll.refresh()
      // })
    },
    methods: {
      /**
       * 网络请求
       */
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
          this.$refs.Scroll.finishPullUp() //Scroll里封装的函数，少调用了scroll对象
        })
      },
      /**
       * 事件监听
       */
      SwiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },
      loadMore() {
        this.getGoodsData(this.goodType) //直接使用上面的请求数据方法和goodType（当前类型）进行请求
        this.$refs.Scroll.scroll.refresh()//解决scroll插件的bug,计算可滚动区域的不实时性，刷新重新计算可滚动区域
      },
      /**
       * 监听点击
       */
      //利用子组件传来的Index对其进行定义，方便之后直接使用
      onTabClick(index) {
        switch (index) {
          case 0:
            this.goodType = 'pop'
            break
          case 1:
            this.goodType = 'new'
            break
          case 2:
            this.goodType = 'sell'
            break
        }
        this.$refs.tabControl.currentIndex = index
        this.$refs.tabControlNew.currentIndex = index
      },
      scrollPosition(position) {
        this.listenShowBackTop(position)//传入位置参数给混入对象
        this.ifTabShow = (-position.y) > this.tabOffsetTop
      },


    },
    activated() {
      this.$refs.Scroll.scroll.refresh()
      this.$refs.Scroll.scroll.scrollTo(0, this.saveY)
    },
    deactivated() {
      this.saveY = this.$refs.Scroll.scroll.y

    },
    computed: {
      showGoods() {
        return this.goods[this.goodType].list //将商品列表给子组件
      },
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

<style scoped lang="scss">
    $baseWidth: 750;
    $baseHeight: 1334;

    @function toScaX($px) {
    @return $px*100/$baseWidth *1vw;
    }

    @function toScaY($px) {
    @return $px*100/$baseHeight *1vh;
    }

    #home {
        position: relative;
        height: 100vh; /*可视窗口百分百*/
    }

    .NavBar {
        background-image: linear-gradient(to right, #ff9569 0%, #e92758 100%);
        color: #fff;
        font-size: 1.5rem;
        /*由于使用scroll框架，所以不再需要脱离标准流将其固定*/
        /*position: fixed;*/
        /*left: 0;*/
        /*right: 0;*/
        /*top: 0;*/
        /*z-index: 9; !*优先级，数字越大优先级越高，覆盖在越前面*!*/
    }

    .tab-control {
        /*position: sticky; !*粘性固定，可以它固定在中间*!*/
        /*top: 44px;*/
        /*z-index: 7;*/
        background: #fff;
        position: relative;
        z-index: 7;
    }

    .content {
        position: absolute; /*子元素绝对定位，父元素相对定位*/
        overflow: hidden;
        top: 44px; /*距离顶部44px.也就是距离父元素顶部44px*/
        bottom: 49px;
        left: 0;
        right: 0;
    }


</style>