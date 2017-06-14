<template>
  <div>
    <div id="imgDiv">
      <img src="../assets/loadingPlane.png" alt="" class="img">
    </div>
    <div id="inputDiv">
        <div class="telDiv">
          <img src="../assets/tel.png" alt="">
          <input type="text" placeholder="请输入手机号">
        </div>
        <div class="telDiv">
          <img src="../assets/Password.png" alt="">
          <input type="password" placeholder="请输入密码">
        </div>
    </div>
    <div class="underDiv">
      <div class="checkboxDiv">
        <div :class='{checkbox:isTrue}'></div>
      </div>
      <p class="remember" @click='remember'>记住密码</p>
      <router-link to="/user/forget" class="router">
        <p class="forget">忘记密码?</p>
      </router-link>
    </div>
    <div class="sureDiv">
      <p>登陆</p>
    </div>
    <div class="footerDiv">
      <p class="sign">没有帐号？</p>
      <router-link to="/user/register" class="router">
        <p class="register">注册</p>
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
  #imgDiv{
    margin-left: 25vw;
    width: 50vw;
    height: 50vw;
    border-radius: 50%;
    border: .3vh solid #fff;
    margin-bottom: 10vh;
  }
  .img{
    width: 30vw;
    height: 30vw;
    margin-top: 10vw;
    margin-left: 8vw;
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
  .underDiv{
    display: flex;
    margin-top: 2vh;
    width: 100vw;
  }
  .checkboxDiv{
    width: 4vw;
    height: 4vw;
    border: .5vw solid white;
    margin-left: 8.5vw;
  }
  .checkbox{
    width: 2.5vw;
    height: 2.5vw;
    background-color: white;
    margin-left: .75vw;
    margin-top: .75vw;
  }
  .remember{
    color: white;
    line-height: 5vw;
    font-size: 2.5vh;
    padding-left: 3vw;
  }
  .forget{
    color: white;
    line-height: 5vw;
    font-size: 2.5vh;
    margin-left: 40vw;
  }
  .sureDiv{
    width: 100vw;
    text-align: center;
    height: 8vh;
    line-height: 8vh;
    color: white;
    font-size: 3vh;
    background-color: #FFB319;
    margin-top: 5vh;
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
