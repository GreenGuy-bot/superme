<template>
    <div v-show="isToastShow" class="toast">
        {{message}}
    </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {

    },
    data() {
      return {
        message: '',
        isToastShow: false
      }
    },
    methods: {
      show(message='默认文字', duration=1500  /*默认值*/) {
        this.message = message
        this.isToastShow = true
        setTimeout(()=>{
          this.isToastShow=false
          this.message=''
        },duration)
      }
    }
  }
</script>

<style scoped>
    .toast {
        position: absolute;
        top: 50%;
        left: 50%;
        color: #fff;
        transform: translate(-50%, -50%);
        padding: 8px 10px;
        background-color: rgba(0, 0, 0, .6);
        z-index: 22;
    }
</style>