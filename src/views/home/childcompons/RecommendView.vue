<template>
<!-- 推荐栏组件 包括好物流行链接图片   -->
    <div>
        <div class="recommend-view">
            <div v-for="item in recommend" class="recommend-com">
                <a :href="item.link">
                    <img :src="item.image">
                    <div>{{item.title}}</div>
                </a>
            </div>
        </div>
        <div class="special">
            <a href="https://act.mogujie.com/zzlx67"><img src="@/assets/img/home/recommend_bg.jpg"></a>
        </div>
    </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
    .recommend-view {
        display: flex;
        border-bottom: 8px solid #eee;
        padding-bottom: 15px;
    }

    .recommend-com {
        flex: 1;
        margin-left: 4px;
        margin-top: 3px;
        text-align: center;
        font-size: 14px;
    }

    .recommend-com img {
        width: 90%; /*图片宽度设置为100%为自适应*/
        margin-bottom: 5px;
    }

    .special {
        display: flex;
    }

    .special img {
        width: 100%;
    }


</style>