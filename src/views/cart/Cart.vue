<template>
<!--  购物车页   -->
    <div class="cart">
        <nav-bar class="navBar">
            <slot slot="center">购物车({{cartLength}})</slot>
        </nav-bar>
        <scroll class="content" ref="Scroll">
            <div v-show="isEmptyShow" class="empty"><h3>这里空空如也~</h3></div>
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
    // activated() {
    //   this.$refs.Scroll.scroll.refresh()
    // }
  }
</script>

<style scoped>
    .cart{
        height: 100vh;
    }
   .navBar{
       background-color: var(--color-tint);
       color:#fff;
   }
    .content{
        height: calc(100% - 93px - 40px);
        overflow: hidden;
    }
    .empty{
        text-align: center;
        padding-top: 15px;
        height: 40px;
    }
</style>