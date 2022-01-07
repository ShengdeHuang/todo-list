<template>
  <div id="app">
    <list :listData="todoData"></list>
  </div>
</template>

<script>
import List from '../components/list'

export default {
  data () {
    return {
      todoData: [{
        title: '待处理',
        list: [{
          id: 1,
          name: '测试1'
        }]
      }, {
        title: '进行中',
        list: [{
          id: 6,
          name: '测试6'
        }]
      }, {
        title: '已完成',
        list: [{
          id: 11,
          name: '测试11'
        }]
      }]
    }
  },
  components: {
    List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
