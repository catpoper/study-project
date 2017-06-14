<template>
  <div class="div">
    <div class="header">
      <img src="../assets/return1.png" alt="" @click="routerBack">
      <p>分享</p>
    </div>
    <div class="share">
      <img src="../assets/wechat.png" alt="">
      <p>分享到微信</p>
    </div>
    <div class="share">
      <img src="../assets/weibo.png" alt="">
      <p>分享到微博</p>
    </div>
    <div class="share" id="share">
      <img src="../assets/qq.png" alt="">
      <p>分享到QQ</p>
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
    overflow: hidden;
  }
  .header{
    display: flex;
    background-color: white;
    height: 7vh;
    line-height: 7vh;
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
  .share{
    width: 100vw;
    background-color: white;
    margin-top: 1.5vh;
    padding-bottom: 2vh;
    padding-top: 1.5vh;
  }
  .share>img{
    width: 30vw;
    height: 30vw;
    margin-left: 35vw;
  }
  .share>p{
    width: 50vw;
    background-color: #ffb11e;
    font-size: 2.6vh;
    color: white;
    height: 6vh;
    line-height: 6vh;
    text-align: center;
    margin-left: 25vw;
    border-radius: 1vh;
    margin-top: 1.5vh;
  }
  #share{
    height: 40vh;
    background-color: white;
  }
</style>
