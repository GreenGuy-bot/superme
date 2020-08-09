<template>
<!--  选择按钮   -->
  <div class="item_check">
    <div class="check_box" :class="{ checked: isChecked }"></div>
  </div>
</template>
<script>
export default {
  props: {
    isChecked:{
      type:Boolean,
      default(){
        return false
      }
    }

  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.item_check {
  width: 1.2rem;
}
.check_box {
  position: relative;
  top: calc(50% - 0.5rem);
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 3px;
  border-radius: 1rem;
  border: 0.04rem solid rgba(128, 128, 128, 0.4);
}

.check_box.checked {
  width: 1.5rem;
  height: 1.5rem;
  border-style: none;
  top: calc(50% - 0.5rem);
  background: url("../../../assets/img/cart/yes.svg") 0 0/90% no-repeat;
}
</style>
