<template>
  <div id="app">
    <home />
    <login />
    <register />
  </div>
</template>

<script>
import Home from './components/Views/Home.vue'
import Login from './components/Views/Login.vue'
import Register from './components/Views/Register.vue'

export default {
  name: 'app',
  components: {
    Home,
    Login,
    Register
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