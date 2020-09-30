<!--封装好的搜索框 -->
<template>
    <div>
        <div :class="className==='default'?'search-warp search-default-bg':className+' search-warp'" v-if="className">
            <div class="search-content">
                <img src="../../../assets/img/common/search.svg" alt="" class="search-icon">
                <form action="javascript:true" class="search-width-fill">
                    <input type="search"
                           :placeholder="placeholder"
                           @keyup.13="searchByKey($event)"
                           class="search-input"
                           ref="input"
                           @input="change($event)"
                    >
                </form>
                <img src="../../../assets/img/common/delete.svg" alt="" class="search-clear" @click="clear" v-if="isShow">
            </div>
        </div>
        <div class="search-warp" v-if="!className">
            <div class="search-content">
                <img src="../../../assets/img/common/search.svg" alt="" class="search-icon">
                <form action="javascript:true" class="search-width-fill">
                    <input type="search"
                           :placeholder="placeholder"
                           @keyup.13="searchByKey($event)"
                           class="search-input-gray"
                           ref="input"
                           @input="change($event)">

                </form>
                <img src="../../../assets/img/common/delete.svg" alt="" class="search-clear" @click="clear" v-if="isShow">
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: "ElSearch",
    data(){
      return {
        isShow:false
      }
    },
    props:{
      placeholder: {
        type: String,
        default: ""
      },
      className:{
        type:String,
        default: ""
      },
    },
    methods:{
      change(e){
        this.isShow = !!e.target.value;
      },
      searchByKey(e){
        this.$refs.input.blur();
        this.$emit('on-click',this.$refs.input.value);//将点击搜索的事件暴露给父组件
      },
      clear(){
        this.$refs.input.value = "";
        this.isShow = false;
      }
    }

  }
</script>
<style scoped>
    input[type="search"]{
        -webkit-appearance:none;
    }
    input::-webkit-search-cancel-button {display: none;}
    .search-warp{
        padding: 0 10px;
    }
    .search-default-bg{
        background: #005398;
    }
    .search-input{
        background: #fff;
        width: 100%;
        height: 44px;
        padding: 10px 10px 10px 35px;
        border-radius: 15px;
        margin:10px 0;
        font-size: 14px;
    }
    .search-input-gray{
        background: #f7f7f7;
        width: 100%;
        height: 44px;
        border-radius: 10px;
        padding: 10px 10px 10px 35px;
        margin:10px 0;
        font-size: 14px;
    }
    .search-input::-webkit-input-placeholder{
        color: #bbbbbb;
    }
    .search-content{
        position: relative;
        display: flex;
        align-items: center;
    }
    .search-icon{
        width: 15px;
        position: absolute;
        left: 10px;
    }
    .search-clear{
        width: 20px;
        position: absolute;
        right: 10px;
    }
    .search-width-fill{
        width: 100%;
    }
</style>
