<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="getData">请求数据</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {getUserById}  from  '@/api/request.js'


export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data(){
    return{
      userId:1
    }
  },
  methods:{
    getData(){

      let data={
        userId:this.userId
      }

      // getUserById(data).then(function (res){
      //   console.log(res)
      // }).catch(err=>{
      //   console.log(err)
      // })
      getUserById(data).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      });
    }
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
