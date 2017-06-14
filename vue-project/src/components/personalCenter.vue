<template>
  <div id="userCenter">
    <personal-header></personal-header>
    <personal-content></personal-content>
    <user-tab></user-tab>
    <router-view class="router"></router-view>
  </div>
</template>

<script>
  import pHeader from './pHeader'
  import PersonalBg from './personalContent'
  import UserTab from './userTab'
  export default{
    data () {
      return {
        msg: 'hello Samadhi'
      }
    },
    components: {
      'personal-header': pHeader,
      'personal-content': PersonalBg,
      'user-tab': UserTab
    }
  }
</script>

<style scoped>
  #userCenter{
    background-color: #f4f4f4;
  }
  .router{
    margin-top: 2vh;
  }
</style>
