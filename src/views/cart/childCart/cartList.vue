<template>
<!--  将购物篮的商品数据遍历传给子组件   -->
    <div class="cartList">
        <cart-list-item v-for="(item,index) in this.$store.state.cartList"
                        :key="index" :item="item" ></cart-list-item>
    </div>
</template>

<script>
  import CartListItem from "./cartListItem";
  export default {
    name: "cartList",
    components: {CartListItem},
    methods:{
      checkClick() {
      },
    }
  }
</script>

<style scoped>

</style>