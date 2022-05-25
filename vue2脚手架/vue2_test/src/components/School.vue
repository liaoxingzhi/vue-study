<template>
  <div id="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showName">点击提示校名</button>
  </div>
</template>

<script>
export default {
  // 组件名称必须由双驼峰或者-连接，否则需在vue.config.js中添加lintOnSave: false（关闭语法检测）
  name: "School",
  data() {
    return {
      name: '北京大学',
      address: '北京市海淀区颐和园路5号'
    }
  },
  methods: {
    showName() {
      alert(this.name)
    }
  }
}
</script>

<style scoped>
  #school {
    background-color: orange;
  }
</style>