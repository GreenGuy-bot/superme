<template>
    <div>
        <div class="myWallet"></div>
        <div class="sign"></div>
        <div class="address" @click="addressClick"></div>
        <div class="service"></div>
        <div class="last">
            <div class="call"></div>
            <div class="telNumber">182-4847-7688</div>
            <div class="arrow"><img src="../../../assets/img/profile/profileOther/arrow.jpg" alt=""> </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: "profileOtherFunction",
    methods:{
      addressClick(){
        this.$router.push('profileAddress')
      }
    }
  }
</script>

<style scoped>
.myWallet{
    margin-top: 4vh;
    margin-left: 5vw;
    height: 3.7vh;
    width: 90vw;
    background: url("../../../assets/img/profile/profileOther/myWallet.jpg") no-repeat;
    background-size: 100% 100%;
}
    .sign{
        margin-top: 4.3vh;
        margin-left: 5vw;
        height: 3.7vh;
        width: 90vw;
        background: url("../../../assets/img/profile/profileOther/sign.jpg");
        background-size: 100% 100%;
    }
    .address{
        margin-top: 4.3vh;
        margin-left: 5vw;
        height: 3.7vh;
        width: 90vw;
        background: url("../../../assets/img/profile/profileOther/address.jpg");
        background-size: 100% 100%;
    }
    .service{
        margin-top: 4.3vh;
        margin-left: 5vw;
        height: 3.7vh;
        width: 90vw;
        background: url("../../../assets/img/profile/profileOther/service.jpg");
        background-size: 100% 100%;
    }
    .last{
        display: flex;
    }
    .call{
        flex:3;
        margin-top: 4.3vh;
        margin-left: 5vw;
        height: 3.7vh;
        width: 40vw;
        background: url("../../../assets/img/profile/profileOther/customerService.jpg");
        background-size: 100% 100%;
    }
    .telNumber{
        flex:2;
        margin-top:5vh ;
        margin-left: 13vw;
        color:#b3b3b3;
        font-weight: bold;
        font-size: 3.7vw;
    }
    .arrow{
        flex:1;
    }
    .arrow img{
        margin-top: 4vh;
        margin-left: 4.7vw;
        width: 3.7vw;
        height:3.7vh;
    }
</style>