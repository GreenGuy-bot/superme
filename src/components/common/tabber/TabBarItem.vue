<template>
<!--  封装好的底部导航栏内部组件  -->
    <div @click="itemclick" class="tab-item">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-iconActive"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-name"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: {
        type: String
      },
      activeColor:{
        type: String,
        default:'red'
      }
    },
    data() {
      return {}
    },
    methods: {
      itemclick() {
        this.$router.replace(this.path).catch(err => err)
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1 //活跃路径没找到为-1 找到不为-1也就是！==-1
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}  //如果isActive为turn则调用color:this.activeColor否则调用{}
      }
    }
  }
</script>

<style scoped>
    .tab-item {
        flex: 1; /*块级元素等分*/
        text-align: center; /*块级元素内的位置居中*/
        height: 49px; /*大部分app功能块高度都是49px*/
        font-size: 14px;
    }

    .tab-item img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
</style>