<template>
    <div class="hl-submenu">
        <router-link tag="span" :active-class="`${activeName}`" :to="`${path}`">
			<span @click="open">
				<i :class="`${url}`"></i>
				<slot name="title"></slot>
				<i :class="`${icon}`" ></i>
			</span>
        </router-link>
        <ul v-if="isShow">
            <slot></slot>
        </ul>
    </div>
</template>
<script>
  export default{
    name:'hlSubMenu',
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
    },
    data(){
      return {
        isShow:false,
        icon:'el-icon-arrow-down',
      }
    },
    methods:{
      open(){
        if(!this.isShow){
          this.isShow=true;
          this.icon='el-icon-arrow-up';
        }else{
          this.isShow=false;
          this.icon='el-icon-arrow-down';
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
    .hl-submenu{
        overflow:hidden;
        i{
            font-size: 18px;
        }
        span{
            /*color: #ddd;*/
            height: 100%;
            width: 100%;
            display: inline-block;
            padding-left:15px;
        }
        .active{
            border-left: 5px solid #5f87e0;
            /*color: black;*/
            background-color:#f6f6f6;
            /*background: rgba(0,0,0,0.5);*/
            padding-left: 15px;
            width: 100%;
        }
        ul{
            list-style: none;
            margin-left: -10px;
            padding-left: 30px;
        }

    }
</style>