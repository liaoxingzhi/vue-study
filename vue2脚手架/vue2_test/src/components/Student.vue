<template>
  <div>
    <h1>{{ info }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别:{{ gender }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      info: "学生基本信息",
    }
  },
  // props用于Vue中父组件向子组件传递数据

  // 数组写法：
  //props: ['name', 'gender', 'age']

  // 对象写法（限制类型）：
  /*props: {
    name: String,
    gender: String,
    age: Number
  }*/

  // 对象写法（完整写法）：
  props: {
    name: {
      type: String, // 限制类型
      required: true, // 是否必传
    },
    gender: {
      type: String,
      default: "男", // 默认值
    },
    age: {
      type: Number,
      required: false
    }
  }
}
</script>

<style scoped>

</style>