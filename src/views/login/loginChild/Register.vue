<template>
    <div v-else class="formSecond">
        <label class="name">
            <input type="text" v-model="name" class="text" placeholder="请输入您的用户名">
        </label>
        <div>
            <label class="passWord">
                <input type="password" v-model="password" class="text" placeholder="请输入您的密码">
            </label>
        </div>
        <div>
            <label class="passWord">
                <input type="password" v-model="repeat" class="text" placeholder="请再次输入您的密码">
            </label></div>
        <button type="button" @click="addUser()" class="loginButton" @mouseover="mouses($event)"
                @mouseout="mouseOutFirst">确 定
        </button>
    </div>
</template>

<script>
  import {login} from '../../../commonjs/mixin'
  document.getElementsByTagName("html")[0].style.fontSize = Math.floor(document.documentElement.clientWidth * 100000 / 36) / 100000 + "px";
  export default {
    name: "Register",
    mixins:[login],
    methods:{
      addUser() {
        if (this.password === this.repeat && this.password !== '' && this.name !== '') {
          localStorage.setItem("name", this.name),
            localStorage.setItem("password", this.password)
          this.name = ''
          this.password = ''
          this.repeat=''
          this.isReg = false
          this.$toast.show('注册成功！', 1500)
        } else {
          this.$toast.show('两次密码输入的不一致或者用户名和密码为空！！！', 1500)
        }
      },
    }
  }
</script>
<!--  不能直接Import导入css,因为直接导入的CSS是全局的   -->
<style scoped  src="../../../assets/css/login.css" ></style>
<style scoped>
    .formSecond {
        width: 80%;
        padding-top: 3rem;
        margin-top: 2.2rem;
    }

    .formSecond div {
        padding-top: 3rem;
    }

</style>