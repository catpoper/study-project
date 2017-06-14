<template>
  <div>
    <div id="inputDiv">
      <div class="telDiv">
        <img src="../assets/user.png" alt="">
        <input type="text" placeholder="输入用户名">
      </div>
      <div class="telDiv">
        <img src="../assets/tel.png" alt="">
        <input type="password" placeholder="输入手机号">
      </div>
      <div class="telDiv">
        <img src="../assets/Password.png" alt="">
        <input type="password" placeholder="输入密码">
      </div>
      <div class="telDiv">
        <img src="../assets/Password.png" alt="">
        <input type="password" placeholder="输入验证码">
      </div>
    </div>
    <div class="getCode">
      <p>获取验证码</p>
    </div>
    <div class="sureDiv">
      <p>注册</p>
    </div>
    <div class="footerDiv">
      <p class="sign">已有帐号？</p>
      <router-link to="/loading" class="router">
        <p class="register">登录</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        msg: 'hello Samadhi',
        isTrue: false
      }
    },
    components: {},
    methods: {
      remember: function () {
        this.isTrue = !this.isTrue
      }
    }
  }
</script>

<style scoped>
  #inputDiv{
    margin-top: 15vh;
  }
  .telDiv{
    display: flex;
    width: 100vw;
    border-bottom: .1vh solid white;
    margin-top: 5vh;
  }
  .telDiv>img{
    width: 8vw;
    height: 8vw;
    padding-left: 7vw;
    padding-bottom: 2vh;
  }
  .telDiv>input{
    outline: none;
    background:none;
    height: 8vw;
    padding-left: 5vw;
    margin-left: 5vw;
    border:none;
    font-size: 3vh;
    width: 68vw;
    color: white;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
    color: #fff;
  }
  .getCode{
    color: white;
    font-size: 3vh;
    text-align: right;
    margin-top: 2vh;
  }
  .getCode>p{
    padding-right: 5vh;
  }
  .sureDiv{
    width: 100vw;
    text-align: center;
    height: 8vh;
    line-height: 8vh;
    color: white;
    font-size: 3vh;
    background-color: #FFB319;
    margin-top: 10vh;
  }
  .footerDiv{
    color: white;
    font-size: 2vh;
    display: flex;
    width: 100vw;
    justify-content: center;
    line-height: 5vh;
    height: 5vh;
    margin-top: 2vh;
  }
  .register{
    margin-left: 5vw;
    font-size: 3vh;
  }
  .router{
    color: white;
    text-decoration: none;
  }
</style>
