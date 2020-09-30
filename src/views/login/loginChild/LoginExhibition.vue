<template>
    <!--  登录功能的登录页  -->
    <div class="form">
        <div class="name">
            <label>
                <input type="text" v-model="name" class="text" placeholder="请输入您的用户名">
            </label>
        </div>
        <label class="passWord">
            <input type="password" v-model="password" class="text" placeholder="请输入您的密码">
        </label><br/><br/><br/>
        <div>
            <button type="button" @click="login()" class="loginButton" @mouseover="mouses($event)"
                    @mouseout="mouseOutFirst">登 录
            </button>
        </div>
        <div class="visitor" @click="visitPush">游客登录</div>
        <div class="forget">忘记密码</div>
    </div>
</template>

<script>
  import {login} from '../../../commonjs/mixin'

  document.getElementsByTagName("html")[0].style.fontSize = Math.floor(document.documentElement.clientWidth * 100000 / 36) / 100000 + "px";
  export default {
    mixins: [login],
    name: "LoginExhibition",
    methods: {
      visitPush() {
        this.$router.push('/home')
      },
      login() {
        if (localStorage.getItem("name") === this.name && localStorage.getItem("password") === this.password) {
          this.$store.commit('setName', this.name)
          this.name = ''
          this.password = ''
          this.$router.push('/home') /*直接转入user路径*/
        } else {
          this.$toast.show('账号或密码输入错误！', 1500)
          this.password = ''
        }

      },
    }
  }
</script>
<!--  不能直接Import导入css,因为直接导入的CSS是全局的   -->
<style scoped src="../../../assets/css/login.css"></style>
<style scoped>
    .form {
        width: 80%;
        padding-top: 2rem;
        margin-top: 2.2em;
    }

    .name {
        margin-top: 2.6rem;
        margin-bottom: 4rem;
    }

    .visitor {
        float: left;
        margin-top: 1.3rem;
        margin-left: 6rem;
        height: 10px;
        color: #777777;
        font-size: 1.2rem;
        text-align: center;
    }

    .forget {
        margin-top: 1.3rem;
        margin-left: 12rem;
        height: 10px;
        color: #777777;
        font-size: 1.2rem;
        text-align: center;
    }

</style>