<template>
<!--  遍历的购物篮商品展示   -->
    <div class="cart_list_item">
        <cart-check-button
                @click.native="checkClick"
                :isChecked="item.checked"
                ref="checkButtonRef"
        ></cart-check-button>
        <div class="item_img" @click="checkClick">
            <img :src="item.img" alt="" />
        </div>
        <div class="item_info">
            <p class="item_title" @click="infoClick(item)">{{ item.title}}</p>
            <p class="item_desc" @click="infoClick(item)">{{ item.desc }}</p>
            <span class="item_price">￥{{ item.price }}</span>
            <div class="item_count">
            <button @click="reduce">-</button>
            <span>{{ item.count }}</span>
            <button @click="increase">+</button>
            </div>
        </div>
    </div>
</template>

<script>
  import CartCheckButton from "./CartCheckButton";
  export default {
    name: "cartListItem",
    components: {CartCheckButton},
    props:{
      item:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      checkClick() {
        this.item.checked = !this.item.checked;
      },
      //信息点击事件
      infoClick(item) {
        this.$router.push("/detail/" + item.iid);
      },
      reduce(){
        if(this.item.count>1){
          this.$store.commit('reCount',this.item)
        }else{
          this.$confirm({
            message: "是否删除该商品？",
            cancelValStyle:{color:'red'},
          }).then(() => {
            // for(let i of this.$store.state.cartList){
            //   if(i.id===this.id){ }
            // }如果只知道ID的话需要遍历找到元素将其删除
                this.$store.state.cartList.splice(this.item, 1)//删除该元素,resolve()回调执行的
          }).catch(() => {
            console.log("no");
          });
        }
      },
      increase(){
        this.$store.commit('addCount',this.item)
      }
    },

  }
</script>

<style scoped>
    .cart_list_item {
        width: 100%;
        height: 25vh;
        border-bottom: 0.04rem solid rgba(128, 128, 128, 0.4);
        display: flex;
        padding-left: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .item_img {
        margin-left: 5px;
        width: 100vw;
        height: 23vh;
    }
    .item_img img {
        width: 100%;
        height: 100%;
        border-radius: 0.4rem;
    }
    .item_info {
        position: relative;
        width: calc(100% - 32vw  - 0.4vw);
        margin-left: 0.4rem;
    }
    .item_info p {
        display: inline-block;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .item_title {
        font-size:4vw;
        font-weight: bold;
        padding-bottom: 0.5rem;
    }
    .item_desc {
        font-size: 3.5vw;
        padding-bottom: 10vh;
        color: gray;
    }
    .item_price {
        position: absolute;
        left: 0;
        bottom: 0.4rem;
        font-size:4vw;
        color: orangered;
    }
    .item_count {
        position: absolute;
        right: 0.4rem;
        bottom: 0.4rem;
        font-size: 4vw;
    }
    .item_count button{
        width: 5vw;
        background: #fff;
        border: #b3b3b3 1px solid;
        margin-left: 2vw;
        margin-right: 2vw;
    }

</style>