<template>
  <div class="register">
    <div class="header">
      <img src="../assets/return.png" alt="" @click="routerBack">
      <p>找回密码</p>
    </div>
    <forget-inp></forget-inp>
  </div>
</template>

<script>
  import forgetInp from './forgetInput.vue'
  export default{
    data () {
      return {
        msg: 'hello Samadhi'
      }
    },
    components: {
      'forget-inp': forgetInp
    },
    methods: {
      routerBack: function () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .register{
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/personBg.png");
    background-size: cover;
  }
  .header{
    display: flex;
    width: 100vw;
    height: 8vh;
    margin-bottom: 5vh;
  }
  .header>img{
    margin-left: 4vh;
    width: 3vh;
    height: 3vh;
    margin-top: 2vh;
    position: absolute;
    z-index: 99;
  }
  .header>p{
    width: 100vw;
    color: white;
    font-size: 3vh;
    line-height: 8vh;
    text-align: center;
    position: absolute;
    left: 0;
  }
</style>
