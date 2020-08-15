<template>
<!--  目前项目使用封装好的底部导航栏组件  -->
    <tabber>
        <TabBarItem path="/home" active-color="#fe928f"><img slot='item-icon' :src="imgHome" alt="">
            <img slot='item-iconActive' :src="imgHomeActive" alt="">
            <div slot="item-name">首页</div>
        </TabBarItem>
        <TabBarItem path="/category" active-color="#fe928f"><img slot='item-icon' :src="imgClassify" alt="">
            <img slot='item-iconActive' :src="imgClassifyActive" alt="">
            <div slot="item-name">分类</div>
        </TabBarItem>
        <TabBarItem path="/cart" active-color="#fe928f"><img slot='item-icon' :src="imgShopping" alt="">
            <img slot='item-iconActive' :src="imgShoppingActive" alt="">
            <div slot="item-name">购物车</div>
        </TabBarItem>
        <TabBarItem path="/profile" active-color="#fe928f"><img slot='item-icon' :src="imgUser" alt="">
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
        imgHome: require('@/assets/img/Tabber/home.png'),
        imgClassify: require('@/assets/img/Tabber/classify.png'),
        imgShopping: require('@/assets/img/Tabber/shopping.png'),
        imgUser: require('@/assets/img/Tabber/user.png'),
        imgHomeActive: require('@/assets/img/Tabber/home_active.png'),
        imgClassifyActive: require('@/assets/img/Tabber/classify_active.png'),
        imgShoppingActive: require('@/assets/img/Tabber/shopping_active.png'),
        imgUserActive: require('@/assets/img/Tabber/user_active.png'),
      }
    }

  }


</script>

<style scoped>
</style>