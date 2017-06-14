<template>
  <div id="personalCenterBg">
    <div>
      <img src="../assets/pClose.png" alt="" id="close" @click="close">
      <img src="../assets/setting.png" alt="" id="setting">
    </div>
    <personal-tab id="personalTab"></personal-tab>
  </div>
</template>

<script>
  import personalTab from './personalTab.vue'
  export default{
    data () {
      return {
        msg: 'hello Samadhi'
      }
    },
    components: {
      'personal-tab': personalTab
    },
    methods: {
      close: function () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  #personalCenterBg{
    background-image: url("../assets/personBg.png");
    width: 100vw;
    height: 100vh;
    background-size: cover;
  }
  #personalTab{
    padding-top: 20vh;
  }
  #close{
    float: left;
    margin-left: 8vw;
    margin-top: 2vh;
    width: 5vh;
  }
  #setting{
    float: right;
    margin-right: 8vw;
    margin-top: 2.1vh;
    width: 5vh;
  }
</style>
