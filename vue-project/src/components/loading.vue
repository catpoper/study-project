<template>
  <div class="loading">
    <div class="header">
      <img src="../assets/return.png" alt="" @click="routerBack">
      <p>登陆</p>
    </div>
    <loading-inp></loading-inp>
  </div>
</template>

<script>
  import LoadingInp from './loadingInput.vue'
  export default{
    data () {
      return {
        msg: 'hello Samadhi'
      }
    },
    components: {
      'loading-inp': LoadingInp
    },
    methods: {
      routerBack: function () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .loading{
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
