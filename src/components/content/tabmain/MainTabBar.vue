<template>
<!--  目前项目使用封装好的底部导航栏组件  -->
    <tabber>
        <TabBarItem path="/home" active-color="red"><img slot='item-icon' :src="imgHome" alt="">
            <img slot='item-iconActive' :src="imgHomeActive" alt="">
            <div slot="item-name">首页</div>
        </TabBarItem>
        <TabBarItem path="/category"><img slot='item-icon' :src="imgClassify" alt="">
            <img slot='item-iconActive' :src="imgClassifyActive" alt="">
            <div slot="item-name">分类</div>
        </TabBarItem>
        <TabBarItem path="/cart"><img slot='item-icon' :src="imgShopping" alt="">
            <img slot='item-iconActive' :src="imgShoppingActive" alt="">
            <div slot="item-name">购物车</div>
        </TabBarItem>
        <TabBarItem path="/profile"><img slot='item-icon' :src="imgUser" alt="">
            <img slot='item-iconActive' :src="imgUserActive" alt="">
            <div slot="item-name">我的</div>
        </TabBarItem>
    </tabber>
</template>

<script>
  import Tabber from "@/components/common/tabber/tabber";
  import TabBarItem from "@/components/common/tabber/TabBarItem";

  export default {
    name: "TabBarMain",
    components: {TabBarItem, Tabber},
    data(){
      return{
        imgHome: require('@/assets/img/Tabber/home.svg'),
        imgClassify: require('@/assets/img/Tabber/classify.svg'),
        imgShopping: require('@/assets/img/Tabber/shopping.svg'),
        imgUser: require('@/assets/img/Tabber/user.svg'),
        imgHomeActive: require('@/assets/img/Tabber/home_active.svg'),
        imgClassifyActive: require('@/assets/img/Tabber/classify_active.svg'),
        imgShoppingActive: require('@/assets/img/Tabber/shopping_active.svg'),
        imgUserActive: require('@/assets/img/Tabber/user_active.svg'),
      }
    }

  }


</script>

<style scoped>
</style>