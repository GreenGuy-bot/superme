<template>
    <div class="goodsItemList">
    <img :src="goodsItem.show.img">
        <div class="goodsInfo">
            <p>{{goodsItem.title}}</p>
            <span class="price">{{'¥'+goodsItem.price}}</span>
            <span class="collect">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "goodsListsItems",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return ''
        }
      }
    }

  }
</script>

<style scoped>
  .goodsItemList{
      padding-bottom: 40px;
      position: relative;
      width:50%;

  }

    .goodsItemList img{
        width:100%;
        padding: 3px;
        border-radius: 12px;
    }
    .goodsInfo{
        font-size: 12px;
        text-align: center;
        overflow: hidden;
        bottom:5px;
        left: 0;
        right: 0;
        position: absolute;
    }
    .goodsInfo p{
        overflow: hidden;
        text-overflow: ellipsis;/*文本超出部分隐藏*/
        white-space: nowrap;/*不换行*/
        margin-bottom: 3px;
    }
    .price{
        color:var(--color-high-text);
        margin-right: 27px;
    }
    .collect{
        position: relative;
    }
    .collect::before{
        content: '';
        position: absolute;
        left:-15px;
        top:-1px;
        width:14px;
        height: 14px;
        background: url("../../../assets/img/home/collect.svg") 0 0/14px 14px ;
    }
</style>