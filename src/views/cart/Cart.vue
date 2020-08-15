<template>
<!--  购物车页   -->
    <div class="cart">
        <nav-bar class="navBar">
            <div slot="center">购物车({{cartLength}})</div>
            <div slot="right" >管理</div>
        </nav-bar>
        <scroll class="content" ref="Scroll">
            <div v-show="isEmptyShow" class="empty"></div>
            <cart-list >
            </cart-list>
        </scroll>
        <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>

<script>
  import NavBar from "../../components/common/navTab/NavBar";
  import CartList from "./childCart/cartList";
  import Scroll from "../../components/common/scroll/Scroll";
  import CartBottomBar from "./childCart/cartBottomBar";
  export default {
    name: "Cart",
    components: {CartBottomBar, Scroll, CartList, NavBar},
    computed:{
      cartLength(){
        return this.$store.state.cartList.length

      },
      isEmptyShow(){
        return this.$store.state.cartList.length===0
      }
    },
    activated() {
      this.$refs.Scroll.scroll.refresh()
    }
  }
</script>

<style scoped>
    .cart{
        height: 100vh;
    }
   .navBar{
       background-image: linear-gradient(to right, #ff9569 0%, #e92758 100%);
       font-size: 1.5rem;
       color: #f6f6f6;
   }
    .content{
        height: calc(100% - 93px - 40px);
        overflow: hidden;
    }
    .empty{
        margin-top:17vh;
        margin-left: 6.2vw;
        height: 50vh;
        width: 90vw;
        background: url("../../assets/img/empty/NoGoods.jpg");
        background-size: 100% 100%;

    }
</style>