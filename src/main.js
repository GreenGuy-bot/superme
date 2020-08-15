import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast'
import theConfirm from './components/common/ifConfirm/index.js'
import fastClick from 'fastclick'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.prototype.$confirm = theConfirm;
Vue.use(toast)
//解决移动端点击300ms的延迟
// fastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



//修改输入框点击BUG
// fastClick.prototype.focus = function (targetElement) {
//   let length;
//   let deviceIsIOS = null
// // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
//   if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
//     length = targetElement.value.length;
//     targetElement.focus();
//     targetElement.setSelectionRange(length, length);
//   } else {
//     targetElement.focus();
//   }
// };