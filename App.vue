<template>
  <div id="app">
    <button @click="show">点击出现</button>
  </div>
</template>
<script>
import {Message} from './components/message.js'
export default {
  methods:{
    show(){
      // 方式一
      // Message({type:'success',message:'xxx'}),
      // 方式二
      Message.success({message:'这是一个弹层'})
    }
  }
}
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
