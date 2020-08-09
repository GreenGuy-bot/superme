<template>
    <!--  详情页   -->
    <div id="detail">
        <!--    顶部导航栏    -->
        <detail-nav-bar class="detailNavBar" @titleIndex="titleIndex"></detail-nav-bar>
        <!--    以下是可滚动区域+有关商品各种信息    -->
        <Scroll class="content" ref="Scroll" :pull-up-load='true' :probe-type="3"
                @scroll="scrollPosition" @pullingUp="loadMore">
            <detail-swiper :top-images="topImages"></detail-swiper> <!-- 父子组件传值要用驼峰 -->
            <detail-base-info :goods="goods"></detail-base-info>
            <DetailShopInfo :shop="shop"></DetailShopInfo>
            <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
            <detail-param-info ref="params" :param-info="pragmaInfo"></detail-param-info>
            <detail-comment ref="comment" :comment-info="commentInfo"></detail-comment>
            <goods-lists ref="recommend" :goods="recommends"></goods-lists>
        </Scroll>
        <!--    回到顶部按钮,使用了混入对象   -->
        <back-top @click.native="topClick" v-show="ifShow"></back-top>
        <!--   底部功能栏，点击加入购物车     -->
        <detail-bottom-bar @clickDart="clickDart"></detail-bottom-bar>
    </div>
</template>

<script>
  import DetailNavBar from "./childDetail/detailNavBar";
  import {getDetailList, getRecomment, Goods, Shop, GoodsParam} from "../../network/detail";
  import DetailSwiper from "./childDetail/detailSwiper";
  import DetailBaseInfo from "./childDetail/DetailBaseInfo";
  import Scroll from "../../components/common/scroll/Scroll";
  import DetailShopInfo from "./childDetail/DetailShopInfo";
  import DetailGoodsInfo from "./childDetail/DetailGoodsInfo";
  import DetailParamInfo from "./childDetail/DetailParamInfo";
  import DetailComment from "./childDetail/detailComment";
  import GoodsLists from "../../components/content/goods/goodsLists";
  import {debounce} from '../../commonjs/utils'
  import DetailBottomBar from "./childDetail/detailBottomBar";
  import {backTopMix} from '../../commonjs/mixin'

  export default {
    name: "Detail",
    mixins: [backTopMix],
    components: {
      DetailBottomBar,
      GoodsLists,
      DetailComment,
      DetailParamInfo, DetailGoodsInfo, DetailShopInfo, Scroll, DetailBaseInfo, DetailSwiper, DetailNavBar
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        pragmaInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0,
      }
    },
    methods: {
      loadMore() {
        this.$refs.Scroll.scroll.refresh()
        this.$refs.Scroll.finishPullUp()//解决scroll插件的bug,计算可滚动区域的不实时性，刷新重新计算可滚动区域
      },
      titleIndex(index) {
        this.$refs.Scroll.scroll.scrollTo(0, -this.themeTopYs[index], 300)
      },
      imageLoad() {
        this.getThemeTopY()
      },
      scrollPosition(position) {
        const positionY = -position.y;
        let length = this.themeTopYs.length
        for (let i = 0; i < length - 1; i++) {
          //length-1是因为只需要遍历三个，还有一个是加进去的最大值，是防止i+1溢出的
          if (this.currentIndex !== i && (positionY >= this.themeTopYs[i]
            && positionY < this.themeTopYs[i + 1])
          ) {
            this.currentIndex = i
            // console.log(this.currentIndex)
          }
        }//回到顶部
        this.listenShowBackTop(position) //传入位置参数给混入对象
      },
      clickDart() {
        //储存商品信息并发给action中的addCart
        const product = {
          iid: this.iid,
          desc: this.goods.desc,
          price: this.goods.realPrice,
          title: this.goods.title,
          img: this.topImages[0]
        }
        this.$store.dispatch('addCart', product).then(res=>{//弹窗回调函数
          this.$toast.show(res,1500)//res=回调的resolve函数，使用则等于输出resolve函数
        })
      }

    },
    created() {
      this.iid = this.$route.params.goodList  //获取路由的goodList赋值给iid
      getDetailList(this.iid).then(res => {
        const data = res.result
        this.topImages = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo
        this.pragmaInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      })
      getRecomment().then(res => {
        this.recommends = res.data.list
      })
      // this.$bus.$on('imageLoad',debounce(()=>{
      // },100))
      this.getThemeTopY = debounce(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)  //防止上方遍历溢出导致没有值，一定要大于上界，取最大值
        // console.log(this.themeTopYs)
      }, 100)
    },
    mounted() {

    }
  }
</script>

<style scoped>
    #detail {
        position: relative;
        z-index: 7; /*只有position属性存在才能使用*/
        background-color: #fff;
        height: 100vh; /*可视窗口大小的100%*/
    }

    .content {
        height: calc(100% - 93px); /* 可滚动高度是父元素高度的100% - 导航栏的44px */
    }

    .detailNavBar {
        position: relative;
        z-index: 9;
        background-color: #fff;
    }
</style>