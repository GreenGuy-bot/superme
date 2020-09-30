<template>
    <!--  二级侧边导航栏，点击变红  -->
    <div class="tabControl">
        <div v-for="(item,index) in title" @click="active(index)" class="tab-control-item"
             :class="{ActiveRed:currentIndex === index}">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "sideCateGory",
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
        flex-direction: column;
        margin-top: 0.1vh;
    }
    .tab-control-item{
        flex: 1;
        padding-top: 2.35vh;
        width: 35vw;
        padding-bottom:2.35vh;
        font-size: 3.8vw;
        background-color: #f7f7f7;
    }
    .ActiveRed{
        font-weight: bold;
        color:var(--color-high-text);
        background-color: #ffffff;
    }

</style>