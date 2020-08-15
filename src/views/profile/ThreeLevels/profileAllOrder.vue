<template>
    <div>
        <nav-bar class="navBar">
            <div slot="center" class="center">我的订单</div>
            <div slot="left" @click="backClick">
                <img src="@/assets/img/common/return.svg" alt="" class="imgLeft">
            </div>
        </nav-bar>
        <tab-control :title="['待付款','待发货','待收货','退款']"></tab-control>
        <div class="empty"></div>

    </div>
</template>

<script>
  import NavBar from "../../../components/common/navTab/NavBar";
  import TabControl from "../../../components/content/tabcontrol/TabControl";

  export default {
    name: "profileAllOrder",
    components: {TabControl, NavBar},
    methods: {
      backClick() {
        this.$router.back()
      },

    }
  }
</script>

<style scoped>
    .navBar {
        font-weight: bold;
    }

    .empty {
        margin-top: 5vh;
        height: 55vh;
        width: 90vw;
        background: url("../../../assets/img/empty/NoOrder.jpg");
        background-size: 100% 100%;
        margin-left: 4.5vw;
    }

    .imgLeft {
        width: 31px;
        height: 31px;
        margin-top: 7px;
    }
</style>