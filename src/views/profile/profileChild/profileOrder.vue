<template>
    <div>
        <div class="order" @click="order"></div>
        <item class="item">
            <item-list @click.native="order">
                <img slot='item-icon' :src="imgPay" alt="">
                <div slot="item-name">待付款</div>
            </item-list>
            <item-list @click.native="order">
                <img slot='item-icon' :src="imgDeliver" alt="">
                <div slot="item-name">待发货</div>
            </item-list>
            <item-list @click.native="order">
                <img slot='item-icon' :src="imgReceive" alt="">
                <div slot="item-name">待收货</div>
            </item-list>
            <item-list @click.native="order">
                <img slot='item-icon' :src="imgRefund" alt="">
                <div slot="item-name">退款</div>
            </item-list>
        </item>
    </div>
</template>

<script>
  import Item from "../../../components/common/item/item";
  import ItemList from "../../../components/common/item/itemList";
  export default {
    name: "profileOrder",
    components: {ItemList, Item},
    data(){
      return{
        imgPay:require('../../../assets/img/profile/pay.svg'),
        imgDeliver:require('../../../assets/img/profile/deliver.svg'),
        imgReceive:require('../../../assets/img/profile/receive.svg'),
        imgRefund:require('../../../assets/img/profile/refund.svg')
      }
    },
    methods:{
         order(){
           this.$router.push('profileAllOrder')
         }
    }
  }
</script>

<style scoped>
.order{
    margin-top: 2vh;
    margin-left: 5vw;
    height: 3.7vh;
    width: 90vw;
    background: url("../../../assets/img/profile/order.jpg");
    background-size: 100% 100%;
}
.item{
    margin-top: 2vh;
}
</style>