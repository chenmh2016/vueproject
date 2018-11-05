<template>
  <div id="app layout">
    <!--<img src="./assets/logo.png">-->
    <div class="left">
      <SideBar></SideBar>
    </div>
   <div class="right">
     <router-view/>
   </div>

  </div>
</template>

<script>
import SideBar from './components/Common/SideBar'
export default {
  name: 'App',
  components: {
    SideBar
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
  .left{
    width: 300px;
    float:left
  }
  .right{
    width: 500px;
    float:left
  }
</style>
