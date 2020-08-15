export default {
  addCount(state,payLord){
    payLord.count ++
  },
  reCount(state,payLord){
   if(payLord.count>1){
     payLord.count --
   }
  },
  addToCart(state,payLord){
    payLord.checked=true  //点击加入购物车的物品附上一个checked值，为true
    state.cartList.push(payLord)
  },
  checkClick(state,payLord){
    if(payLord){
      state.cartList.forEach(value => value.checked=false)//如果全选为true，则将全部的都取消选中
    }else{
      state.cartList.forEach(value => value.checked=true)
    }
  },
  setName(state,msg){
    state.name=msg
  },
}