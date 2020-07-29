<template>
    <!--  详情页的导航栏  -->
    <div>
        <NavBar>
            <div slot="left" @click="backClick">
                <img src="@/assets/img/common/return.svg" alt="" class="imgLeft">
            </div>
            <div slot="center" class="center">
                <div class="titleItem" v-for="(item,index) in title"
                     @click="Active(index)" :class="{Red:currentIndex === index}">{{item}}
                </div>
            </div>
        </NavBar>
    </div>
</template>

<script>
  import NavBar from "../../../components/common/navTab/NavBar";

  export default {
    name: "detailNavBar",
    components: {NavBar},
    data() {
      return {
        title: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      Active(index) {
        this.currentIndex = index
        this.$emit('titleIndex',index)
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
    .center {
        display: flex;
    }

    .titleItem {
        flex: 1;
        font-size: 15px;
    }

    .Red {
        color: var(--color-high-text);
    }

    .imgLeft {
        width: 31px;
        height: 31px;
        margin-top: 7px;
    }
</style>