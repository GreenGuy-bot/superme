<template>
<!--  二级导航栏，点击变红，并把点击对象传到外部home  -->
    <div class="tabControl">
        <div v-for="(item,index) in title" @click="active(index)" class="tab-control-item"
             :class="{ActiveRed:currentIndex === index}">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      active(index){
        this.$emit('tabClick',index) //将被点击的index传出去
        this.currentIndex = index
      }
    },
    props:{
      title:{
        type:Array,
        default(){
          return;[]
        }
      }
    }

  }
</script>

<style scoped>
    .tabControl{
        display: flex;
        text-align: center;
    }
    .tab-control-item{
        flex: 1;
        height: 40px;
        line-height: 40px;
        font-size: 15px;
        margin-left: 20px;
        margin-right: 20px;
    }
    .ActiveRed{
        color:var(--color-high-text);
        border-bottom: var(--color-high-text) solid 3px ;
        padding-bottom: 5px;
    }

</style>