<template>
  <div class="div">
    <div class="header">
      <img src="../assets/return1.png" alt="" @click="routerBack">
      <p>清除缓存</p>
    </div>
    <div class="sure">
      <img src="../assets/clear.png" alt="">
      <p>确认清除</p>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        msg: 'hello Samadhi'
      }
    },
    components: {},
    methods: {
      routerBack: function () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .div{
    background-color: #f4f4f4;
    height: 100vh;
  }
  .header{
    display: flex;
    background-color: white;
    height: 7vh;
    line-height: 7vh;
    left: 3vh;
  }
  .header>img{
    height: 3vh;
    width: 3vh;
    margin-top: 2vh;
    position: absolute;
    z-index: 99;
    left: 3vh;
  }
  .header>p{
    color: #ffb11e;
    font-size: 2.6vh;
    width: 100vw;
    position: absolute;
    left: 0;
    text-align: center;
  }
  .sure>img{
    width: 40vw;
    height: 40vw;
    margin-left: 30vw;
    margin-top: 25vh;
  }
  .sure>p{
    width: 60vw;
    line-height: 7vh;
    height: 7vh;
    background-color: #ffb11e;
    color: white;
    font-size: 2.6vh;
    text-align: center;
    margin-left: 20vw;
    margin-top: 5vh;
    border-radius: 1vh;
  }
</style>
