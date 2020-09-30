<template>
    <!--  导航栏下方的会员卡部分  -->
    <div class="members">
        <div class="user">
            <img src="../../../assets/img/profile/headIcon.svg" alt="">
            <span class="name">{{showName}}<br/><h5>普通会员</h5></span>
            <h3 class="ifMember" @click="toMember">普通会员</h3>
        </div>
        <div class="userData">
            <span>0</span>
            <span>5</span>
            <span>50</span>
        </div>
        <div class="userList">
            <span>收藏</span>
            <span>优惠券</span>
            <span>积分</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "profileMembers",
    methods: {
      toMember() {
        this.$router.push('myMembers')
      }
    },
    computed: {
      showName() {
        if (this.$store.state.name === '') {
          return '游客85978'
        } else {
          return this.$store.state.name
        }
      }
    }
  }
</script>

<style scoped>
    .members {
        height: 22vh;
        width: 90vw;
        margin-left: 5vw;
        margin-top: 1.5vh;
        background: url("../../../assets/img/profile/members.png") no-repeat;
        background-size: 100% 100%;
    }

    .user img {
        padding: 0;
        margin-left: 4vw;
        margin-top: 3vh;
        float: left;
        width: 14vw;
    }

    .name {
        float: left;
        font-size: 4vw;
        margin-top: 5vh;
        margin-left: 2vw;
        color: #fff;
    }

    .name h5 {
        margin-top: 0.5vh;
    }

    .ifMember {
        float: right;
        color: #f2f5f8;
        font-size: 3.7vw;
        margin-top: 5.8vh;
        margin-right: 1.5vw;
    }

    .ifMember:after {
        content: '';
        float: right;
        display: block;
        margin-left: 0.8vw;
        height: 4vh;
        width: 4vw;
        background: url("../../../assets/img/common/arrow.svg") no-repeat;
        background-size: 100%
    }

    .userList {
        display: flex;
        width: 90vw;
    }

    .userList span {
        color: #fff;
        flex: 1;
        font-family: "Microsoft YaHei UI", serif;
        font-size: 4vw;
        margin-top: 1vh;
        margin-left: 10vw;
    }

    .userData {
        display: flex;
        width: 90vw;
    }

    .userData span {
        color: #fff;
        flex: 1;
        font-family: "Microsoft YaHei UI", serif;
        font-size: 4vw;
        margin-top: 3.2vh;
        margin-left: 12.7vw;
    }

    .userData span:nth-child(2) {
        margin-left: 13vw;
    }

    .userData span:nth-child(3) {
        margin-left: 8vw;
    }
</style>