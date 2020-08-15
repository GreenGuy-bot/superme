<template>
    <transition name="myActive">
        <div class="navBar">
            <hl-menu>
                <template v-for="(item,index) in sideNavBarData">
                    <reSub :data="item" v-if="item.children" :key="`sub_${index}`"></reSub>
                    <hl-menu-item :key="`item_${index}`" :url="item.icon" :path="item.path"
                                  :activeName="item.activeName" v-else>{{item.title}}
                    </hl-menu-item>
                </template>
            </hl-menu>
        </div>
    </transition>
</template>

<script>
  import HlMenu from "../../../components/common/sideBar/hlMenu";
  import ReSub from "../../../components/common/sideBar/reSub";
  import HlMenuItem from "../../../components/common/sideBar/hlMenuItem";
  export default {
    name: "profileSideBar",
    components: {HlMenuItem, ReSub, HlMenu},
    data(){
      return{
        sideNavBarData: [
          {
            title: '我的评价',
            path: '/profileComment',
            activeName: 'active',
            icon:'left'
          },
          {
            title: '系统设置',
            path: '/profileSetting',
            activeName: 'active',
            icon: 'el-icon-upload'
          },
          {
            title: '意见反馈',
            path: '/feedBack',
            activeName: 'active',
            icon: 'el-icon-upload'
          },
          {
            title: '我的会员',
            path: '/myMembers',
            activeName: 'active',
            icon: 'el-icon-upload'
          },
          {
            title: '浏览历史',
            path: '/history',
            activeName: 'active',
            icon: 'el-icon-upload'
          },
          {
            title: '版本更新',
            path: '',
            activeName: 'active',
            icon: 'el-icon-upload',
            children:[
              {
                title:'当前版本 2.3.1',
                path:''
              },
              {
                title:'更新到最新版本',
                path:''
              }
            ]
          },
        ]
      }
    }
  }
</script>

<style scoped>
    .myActive-enter-active,.myActive-leave-active{
        transition: opacity .1s
    }
    .myActive-enter, .myActive-leave-to {
        opacity: .1
    }
    .myActive-leave, .myActive-enter-to {
        opacity: 1
    }

    .left{
        width: 100px;
        height: 100px;
        background-color: #666666;
    }
    .myActive-enter{
        transform:translateY(-100%);
    }
    .myActive-leave-avtive{
        transform:translateY(100%);
    }
    .myActive-enter-active{
        transition:all 1s ease-out;
    }
    .myActive-leave-active{
        transition:all .85s ease-out;
    }
</style>