// 引入Vue
import Vue from 'vue'
// 引入App组件（所有组件的父组件）
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象（vm）
new Vue({
  //将h创建的Node节点信息return返回给Vue.js底层处理文件中的beforeMount()生命周期钩子函数，让其将Node节点信息在界面中渲染出来
  render: h => h(App),
}).$mount('#app') // Vue实例的$mount()方法，作用和el属性完全一样
