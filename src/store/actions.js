export default {
  //官方推荐通过actions提交mutations来修改state，mutations方法中有多步操作推荐这么做
  addCart(context, payLord) {
    // let oldProduct = null;
    // for (let item of state.cartList) {
    //   if (item.iid === payLord.iid) {
    //     oldProduct = item //将重复的赋值给oldProduct
    //   }
    // }
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => //item是遍历后里面找到的对象
        item.iid === payLord.iid //只有一行可以省略大括号和return，是给oldProduct返回一个重复值
      )
      if (oldProduct) {
        context.commit('addCount', oldProduct)
        //如果oldProduct为true,则为重复，将count+1 表示多买一个
        resolve('当前商品数量+1')
      } else {
        payLord.count = 1
        context.commit('addToCart', payLord)
        resolve('添加了新的商品')
        //没重复的count默认为1
      }
    })

  }
}