<template>
<!--  购物车底部功能栏   -->
    <div class="cartBottomBar">
          <div class="checkArea"><!-- 将isChecked的值传入子组件中，判断按钮是否被选择（全选） -->
              <CartCheckButton @click.native="checkClick"
                        :isChecked="isCheckedAll"  ref="checkButtonRef"
              ></CartCheckButton>
              <span class="all">全选</span>
              <div class="totalPrice">
                  合计:{{totalPrice}}
              </div>
              <div class="calculate" @click="calClick">
                  去计算({{checkedLength}})
              </div>
          </div>

    </div>
</template>

<script>
  import CartCheckButton from "./CartCheckButton";
  export default {
    name: "cartBottomBar",
    components: {CartCheckButton},
    computed:{
      totalPrice(){
        //只有一行代码可以省略大括号和return
        return '¥' + this.$store.state.cartList.filter(item => item.checked)
          .reduce((previousValue,item ) =>{
            return  previousValue + item.price*item.count
          },0)
      },
      checkedLength(){
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isCheckedAll(){
        if(this.$store.state.cartList.length===0) return false //购物车没有东西则不是全选
        return !this.$store.state.cartList.find(item => !item.checked)
        //如果找到有个一没有被选中的check则表示不是全选，则取反为false
      },

    },
    methods:{
      checkClick(){
         this.$store.commit('checkClick',this.isCheckedAll)
      },
      calClick(){
        if(!this.isCheckedAll){
          this.$toast.show('请选择您要购买的商品',1500)
        }
      }
    }
  }
</script>

<style scoped>
   .cartBottomBar{
       background-color: #cccccc;
       position: relative;
       bottom: 0;
       height: 40px;
   }
    .checkArea{
        display: flex;
        padding: 4px;
    }
    .all{
        margin-left: 10px;
        margin-top: 8px;
        font-family: "Adobe 楷体 Std R",serif;
        font-weight: bold;
    }
    .totalPrice{
        margin-top: 8px;
        margin-left: 10px;
    }
    .calculate{
        color:#fff;
        height: 40px;
        position: absolute;
        padding-right: 15px;
        padding-left: 15px;
        right: 0;
        top:0;
        line-height:2.5;
        background-color:#f13e3a;
    }
</style>