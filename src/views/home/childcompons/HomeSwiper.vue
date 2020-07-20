<template>
<!--  目前项目使用封装轮播图的组件，遍历了数据的图片和内容   -->
    <Swiper>
        <slide v-for="item in banner">
            <a :href="item.link"> <img :src="item.image"></a>
        </slide>
    </Swiper>
</template>

<script>
  import Swiper from '@/components/common/swiper/Swiper';
  import Slide from "@/components/common/swiper/SwiperItem";

  export default {
    name: "HomeSwiper",
    props: {
      banner: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      Slide,
      Swiper,
    }
  }
</script>

<style scoped>

</style>