<template>
    <!-- 消息页   -->
    <div>
        <nav-bar>
            <div slot="center" class="center">我的消息</div>
            <div slot="left" @click="backClick">
                <img src="@/assets/img/common/return.svg" alt="" class="imgLeft">
            </div>
        </nav-bar>
        <div class="empty"></div>
    </div>
</template>

<script>
  import NavBar from "../../../components/common/navTab/NavBar";

  export default {
    name: "profileMessage",
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

    .empty {
        background: url("../../../assets/img/empty/NoMessage.jpg");
        background-size: 100% 100%;
        width: 70vw;
        height: 40vh;
        margin-left: 15vw;
        margin-top: 10vh;
    }
</style>