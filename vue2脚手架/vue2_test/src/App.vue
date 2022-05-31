<template>
  <div id="app">
    <!-- 被用来给元素或子组件注册引用信息（id的替代者） -->
    <img ref="img" alt="Vue logo" src="./assets/logo.png">
    <School ref="school"></School>
    <Student></Student>
    <button @click="consoleDom">点击打印dom</button>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
  name: 'App',
  components: {
    School,
    Student
  },
  methods: {
    consoleDom() {
      //console.log(this.$refs) 一个对象，持有注册过 ref attribute 的所有 DOM 元素和组件实例
      console.log(this.$refs.img) //非组件 DOM元素
      console.log(this.$refs.school) //组件 组件实例
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
