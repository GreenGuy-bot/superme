<template>
    <div class="login">
        <tab-control :title="['登录','注册']" class="tabControl" @tabClick="onTabClick"></tab-control>
        <login-exhibition v-if="isReg"></login-exhibition>
       <Register v-else></Register>
    </div>
</template>
<script>
  import LoginExhibition from "./loginChild/LoginExhibition";
  document.getElementsByTagName("html")[0].style.fontSize = Math.floor(document.documentElement.clientWidth * 100000 / 36) / 100000 + "px";
  import TabControl from "../../components/content/tabcontrol/TabControl";
  import Register from "./loginChild/Register";

  export default {
    name: "Login",
    components: {Register, LoginExhibition, TabControl},
    data() {
      return {
        isReg: true,
      }
    },
    methods: {
      onTabClick(index) {
        this.isReg = index === 0; //webStorm自动简化，直接给isReg赋值
      }
    }}

</script>

<style scoped lang="less">

    .login {
        position: relative;
        padding-top: 45vh;
        display: flex;
        justify-content: center;
        z-index: 10;
        height: 100vh;
        background: url("../../assets/img/login/login.jpg") no-repeat;
        background-size: 100% 100%;
    }

    .tabControl {
        position: absolute;
        margin-bottom: 1rem;
        font-weight: bolder;
        width: 80%;
        flex: 1;
    }

</style>
