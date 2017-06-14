<template>
  <div class="div">
    <div class="header">
      <img src="../assets/return1.png" alt="" @click="routerBack">
      <p class="userTitle">用户反馈</p>
      <p class="submit">提交</p>
    </div>
    <div class="userContact">
      <p class="contactTitle">您的联系方式:</p>
      <div class="userTel">
        <img src="../assets/tel1.png" alt="">
        <input type="text" placeholder="请输入电话">
      </div>
      <div class="userTel">
        <img src="../assets/email.png" alt="">
        <input type="text" placeholder="请输入邮箱">
      </div>
    </div>
    <div class="contentDiv">
      <p class="contactTitle">您的反馈：</p>
      <textarea name="" id="" cols="30" rows="10" class="text"></textarea>
      <div class="line"></div>
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
  .userTitle{
    color: #ffb11e;
    font-size: 2.6vh;
    width: 100vw;
    position: absolute;
    left: 0;
    text-align: center;
  }
  .submit{
    position: absolute;
    right: 3.5vh;
    font-size: 2.4vh;
    color: #ffb11e;
    margin-top: .2vh;
  }
  .userContact{
    margin-top: 2vh;
    width: 100vw;
    background-color: white;
  }
  .userTel{
    width: 100vw;
    height: 7vh;
    border-bottom: 1px solid #cacaca;
    display: flex;
  }
  .userTel>img{
    width: 5vh;
    height: 5vh;
    margin-top: 1vh;
    margin-left: 10vh;
  }
  .userTel>input{
    text-decoration: none;
    outline: none;
    width: 60vw;
    font-size: 2.6vh;
    border: none;
    margin-left: 10vw;
  }
  .contactTitle{
    font-size: 2.6vh;
    height: 7vh;
    line-height: 7vh;
    padding-left: 4vh;
    width: 96vw;
    border-bottom: 1px solid #cacaca;
  }
  .contentDiv{
    width: 100vw;
    margin-top: 1.5vh;
    background-color: white;

  }
  .text{
    width: 72vw;
    height: 30vh;
    margin-top: 1.5vh;
    margin-left: 10vw;
    font-size: 2.6vh;
    padding: 4vw;
  }
  .line{
    border-bottom: 1px solid #cacaca;
    width: 100vw;
    margin-top: 1.5vh;
  }
</style>
