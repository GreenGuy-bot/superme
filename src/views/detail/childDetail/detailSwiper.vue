<template>
    <!--  详情页的轮播图  -->
    <swiper class="detailSwiper">
        <slide v-for="item in topImages">
            <img :src="item" class="swiperImg" alt="">
        </slide>
    </swiper>
</template>

<script>
  import Swiper from "../../../components/common/swiper/Swiper";
  import Slide from "../../../components/common/swiper/SwiperItem";

  export default {
    name: "detailSwiper",
    components: {Slide, Swiper},
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
    .swiperImg {

    }

    .detailSwiper {
        height: 357px;
        overflow: hidden;
    }
</style>