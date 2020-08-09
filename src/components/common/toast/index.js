import Toast from './Toast'
const obj={}
obj.install=function (Vue) {
  //组件构造器
  const toastStructure =Vue.extend(Toast)
  //创建实例对象
  const toast =new toastStructure()
  //手动挂载实例对象
  toast.$mount(document.createElement('div'))

  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}
export default obj //默认导出只有一个的话，接受者可以任意取名