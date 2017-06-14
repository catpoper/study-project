<template>
  <div id="app">
    <transition mode="out-in" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight" name="myFade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'app'
  }
</script>

<style>
  @import "./assets/animate.css";
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 40px;
  }
  a{
    color: #888;
  }
</style>
