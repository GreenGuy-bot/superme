<!--       会员页面        -->
<template>
    <div>
        <nav-bar>
            <div slot="center" class="center">我的会员</div>
            <div slot="left" @click="backClick">
                <img src="@/assets/img/common/return.svg" alt="" class="imgLeft">
            </div>
        </nav-bar>
    </div>
</template>

<script>
  import NavBar from "../../../components/common/navTab/NavBar";

  export default {
    name: "myMembers",
    components: {NavBar},
    methods: {
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
    .center {
        font-size: 4.2vw;
        font-weight: bold;

    }

    .imgLeft {
        width: 8.5vw;
        margin-top: 7px;
    }
</style>