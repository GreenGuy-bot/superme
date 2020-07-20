<template>
    <div class="tabControl">
        <div v-for="(item,index) in title" @click="red(index)" class="tab-control-item" :class="{ActiveRed:currentIndex === index}">
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
      red(index){
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
        margin-left: 5px;
        margin-right: 5px;
    }
    .ActiveRed{
        color:var(--color-high-text);
        border-bottom: var(--color-high-text) solid 3px;
        padding-bottom: 5px;
    }

</style>