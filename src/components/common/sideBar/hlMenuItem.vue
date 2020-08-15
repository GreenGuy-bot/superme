<template>
    <router-link tag="li" :active-class="`${activeName}`" :to="`${path}`">
        <i :class="`${url}`"></i>
        <slot></slot>
    </router-link>
</template>

<script>
  export default{
    name:'hlMenuItem',
    props:{
      url:{
        type:String,
        default:'',
      },
      activeName:{
        type:String,
        default:'',
      },
      path:{
        type:String,
        default:'',
      }
    }
  }
</script>

<style lang="scss" scoped>
    li{
        height: 55px;
        padding-left: 30px;
        background-color:#f6f6f6;
        border-bottom: #eeeeee solid 1px;
        /*background-color: rgba(0,0,0,0.5);*/
        /*color: #fff;*/
    }
    li.active{
        border-left: 5px solid #5f87e0;
        /*background-color:#b3b3b3;*/
        /*color: #fff;*/
        /*background: rgba(0,0,0,0.5);*/
    }
</style>