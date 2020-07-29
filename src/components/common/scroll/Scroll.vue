<template>
    <!--  封装好的滑动组件  -->
    <div class="wrapped" ref="wrapped">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {    //父传子一定要用Props
      probeType: {
        type: Number,
        default() {
          return 0
        }
      },
      pullUpLoad: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    data() {
      return {
        scroll: null,
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapped, {
          click: true,
          probeType: this.probeType, //根据传入的值来判断是否实时监听,3为实时监听
          pullUpLoad: this.pullUpLoad //注意是pull不是pulling和下面的pulling区分开
        }
      )

      this.scroll.on('scroll', (position) => {    //监听滑动
        this.$emit('scroll', position)
      })

      //监听下拉
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })

    },
    methods: {
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()  //如果scroll为null则不调用，不为null才调用
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      }
    }

  }
</script>

<style scoped>

</style>