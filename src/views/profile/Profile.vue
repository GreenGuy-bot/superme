<template>
    <div class="profile">
        <profile-nav-bar @isSideChange="isSideChange"></profile-nav-bar>
        <profile-side-bar v-show="isShowSide"></profile-side-bar>
        <profile-members></profile-members>
        <profile-order></profile-order>
        <profile-other-function></profile-other-function>
    </div>
</template>

<script>
  import NavBar from "../../components/common/navTab/NavBar";
  import ProfileNavBar from "./profileChild/profileNavBar";
  import ProfileMembers from "./profileChild/profileMembers";
  import ProfileOrder from "./profileChild/profileOrder";
  import ProfileOtherFunction from "./profileChild/profileOtherFunction";
  import ProfileSideBar from "./profileChild/profileSideBar";


  export default {
    name: "Profile",
    components: {
      ProfileSideBar,
       ProfileOtherFunction, ProfileOrder, ProfileMembers, ProfileNavBar, NavBar
    },
    data() {
      return {
        isShowSide: false,

      }
    },
    methods: {
      isSideChange() {
        this.isShowSide = !this.isShowSide
      }
    }
  }
</script>

<style scoped>
    .profile {
        height: 100vh;
    }



</style>