<template>
    <!--  搜索框封装  -->
    <div>
        <nav-bar class="navBar">
            <div slot="center">
                <label>
                    <img src="../../../assets/img/common/search.svg" alt="" class="searchIcon">
                    <input type="text" class="search" v-model="search">
                    <img v-if="ifTakePhoto" src="../../../assets/img/common/photo.svg" alt="" class="takePhoto">
                    <img v-else @click="deleteSearch" src="../../../assets/img/common/delete.svg" alt="" class="delete">
                </label>
            </div>
            <div slot="left" class="scan"></div>
            <div slot="right" class="right"></div>
        </nav-bar>
    </div>
</template>

<script>
  import NavBar from "../navTab/NavBar";

  export default {
    name: "search",
    components: {NavBar},
    data() {
      return {
        search: ''
      }
    },
    methods: {
      deleteSearch() {
        this.search = ''
      }
    },
    computed: {
      ifTakePhoto() {
        return !this.search.length > 0
      }
    }
  }
</script>

<style scoped>
    .navBar {
        height: 10vh;
        background: #fff;
    }

    .search {
        border-radius: 15px;
        border: 0;
        width: 70vw;
        height: 4.5vh;
        margin-top: 3.5vh;
        float: left;
        background-color: #f7f7f7;
        padding-left: 8vw;
        padding-right: 8vw;
    }

    .scan {
        background: url("../../../assets/img/common/scan.svg");
        background-size: 100% 100%;
        width: 5.5vw;
        height: 7vh;
        margin-left: 4.7vw;
        margin-top: 2.3vh;
    }

    .searchIcon {
        position: relative;
        float: left;
        margin-top: 4.5vh;
        margin-right: -7vw;
        margin-left: 2vw;
        width: 5vw;
        background-size: 100%
    }

    .takePhoto {
        position: relative;
        float: right;
        margin-top: 4.1vh;
        margin-right: 3vw;
        margin-left: -9vw;
        width: 6vw;
        background-size: 100%
    }

    .delete {
        position: relative;
        float: right;
        margin-top: 4.1vh;
        margin-right: 3vw;
        margin-left: -9vw;
        width: 6vw;
        background-size: 100%
    }

    .right {
        background: url("../../../assets/img/category/hot.svg");
        background-size: 100% 100%;
        width: 7vw;
        height: 7vh;
        margin-right: 4vw;
        margin-top: 2.3vh;
    }
</style>