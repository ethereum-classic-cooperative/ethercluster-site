<template>
  <div id="app" class="container">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Ethercluster: Open Source Ethereum-based Cloud Architecture"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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

.logo {
  width: 200px;
  height: 300px;
}
</style>