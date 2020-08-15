<template>
    <nav-bar class="navBar">
        <div slot="center" class="center">会员中心</div>
        <div slot="left" class="left" @click="ifSide"></div>
        <div slot="right" class="right" @click="message"></div>
    </nav-bar>
</template>

<script>
  import NavBar from "../../../components/common/navTab/NavBar";
  export default {
    name: "profileNavBar",
    components: {NavBar},
    methods:{
      message(){
        this.$router.push('profileMessage')
      },
      ifSide(){
        this.$emit('isSideChange')
      }
    }
  }
</script>

<style scoped>
    .navBar {
        box-shadow: 0 0 0 rgba(100, 100, 100, 0.8);
    }

    .center {
        font-size: 4vw;
        font-weight: bold;
    }

    .left {
        margin-top: 0.3vh;
        margin-left: 3vw;
        height: 6vh;
        width: 6vw;
        background: url("../../../assets/img/profile/left.svg");
        background-size: 100% 100%;
    }

    .right {
        margin-top: 0.3vh;
        margin-right: 3vw;
        height: 6vh;
        width: 6vw;
        background: url("../../../assets/img/profile/right.svg");
        background-size: 100% 100%;
    }
</style>