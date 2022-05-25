// 引入Vue
import Vue from 'vue'
// 引入App组件（所有组件的父组件）
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象（vm）
new Vue({
  //
  render: h => h(App),
}).$mount('#app') // Vue实例的$mount()方法，作用和el属性完全一样
