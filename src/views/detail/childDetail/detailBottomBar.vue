<template>
    <div class="bottomBar">
        <div class="bottom_left">
            <div class="service">
                <i class="icon"></i>
                <span>客服</span>
            </div>
            <div class="shop">
                <i class="icon"></i>
                <span>店铺</span>
            </div>
            <div class="collect">
                <i class="icon"></i>
                <span>收藏</span>
            </div>
        </div>
        <div class="bottom_right">
            <div class="cart" @click="addToCart">
                加入购物车
            </div>
            <div class="buy">
                购买
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "detailBottomBar",
    methods: {
      addToCart() {
        this.$emit("clickDart");
      }
    }

  }
</script>

<style scoped>
    .bottomBar{
        height: 49px;
        position: relative;
        display: flex;
        text-align: center;
        box-shadow: 0 -0.04rem 0.4rem gray;
        background-color: #fff;
        line-height:1.9;
        font-size: 15px;
    }
    .bottom_left {
        display: flex;
        flex: 1;
    }
    .bottom_left > div {
        flex: 1;
        border-right: 0.04rem solid rgba(128, 128, 128, 0.2);
    }
    .bottom_left .icon {
        display: block;
        background: url("../../../assets/img/detail/detail_bottom.png") 0 0/100%;
        width: 1rem;
        height: 1rem;
        margin: 0.12rem auto;
    }
    .service .icon {
        background-position: 0 -2.4rem;
        margin-top: 6px;
    }
    .shop .icon {
        background-position: 0 -4.5rem;
        margin-top: 6px;
    }
    .collect .icon{
        margin-top: 6px;
    }
    .bottom_right {
        display: flex;
        flex: 1;
    }
    .bottom_right > div {
        flex: 1;
        line-height: 2.09rem;
    }
    .cart {
        background-color: rgb(255, 174, 0);
        padding-top:2.1vh;
    }
    .buy {
        background-color:#42b983;
        color: white;
        padding-top: 2vh;
    }
</style>