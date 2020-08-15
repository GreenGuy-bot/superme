<template>
    <hl-sub-menu :url="data.icon" :path="data.path" :activeName="data.activeName">
        <template slot="title">
            {{data.title}}
        </template>
        <template v-for="(item,index) in data.children">
            <re-sub :data="item" v-if="item.children" :key="`sub_${index}`"></re-sub>
            <hl-menu-item  v-else :key="`item_${index}`" :path="item.path" :activeName="item.activeName">{{item.title}}</hl-menu-item>
        </template>
    </hl-sub-menu>

</template>

<script>
  import hlSubMenu from './hlSubMenu';
  import hlMenuItem from './hlMenuItem';
  export default{
    name:'reSub',
    components:{hlSubMenu,hlMenuItem},
    props:{
      data:{
        type:Object,
        default:()=>({}),
      }
    }
  }
</script>
