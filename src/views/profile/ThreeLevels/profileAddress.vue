<template>
    <div>
        <nav-bar class="navBar">
            <div slot="center" class="center">我的地址</div>
            <div slot="left" @click="backClick">
                <img src="@/assets/img/common/return.svg" alt="" class="imgLeft">
            </div>
            <span slot="right" class="right">
                添加新的地址
            </span>
        </nav-bar>
        <div class="empty"></div>
    </div>
</template>

<script>
  import NavBar from "../../../components/common/navTab/NavBar";

  export default {
    name: "profileAddress",
    components: {NavBar},
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
    .imgLeft {
        width: 8.5vw;
        margin-top: 7px;
    }
     .empty {
        margin-top: 5vh;
        height: 55vh;
        width: 90vw;
        background: url("../../../assets/img/empty/NoAddress.jpg");
        background-size: 100% 100%;
        margin-left: 4.5vw;
    }
    .right{
        margin-top: 0.1vh;
        color: #666666;
        width: 30vw;
        font-size: 3.5vw;
    }
</style>