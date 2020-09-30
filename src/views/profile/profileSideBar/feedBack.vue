<template>
    <div>
        <h2>反馈</h2>
<!--        <QRcode :url='url'></QRcode>-->
    </div>
</template>

<script>
  // import QRcode from "../../../components/common/qrcode/QRcode";
  export default {
    name: "feedBack",
    components: {QRcode},
    data(){
      return{
        url:'https://www.bilibili.com/'
      }
    }
  }
</script>

<style scoped>

</style>