<template>
  <div>
    <div id="inputDiv">
      <div class="telDiv">
        <img src="../assets/user.png" alt="">
        <input type="text" placeholder="输入手机号">
      </div>
    </div>
    <div class="sign">
      <p>*输入手机号码后，系统会发送密码至您注册的手机号码，收到密码后重新登录即可。</p>
    </div>
    <div class="sureDiv">
      <p>找回密码</p>
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
    margin-top: 10vh;
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
  .sign{
    color: white;
    width: 70vw;
    margin-left: 15vw;
    font-size: 3vh;
    margin-top: 5vh;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
    color: #fff;
  }
  .sureDiv{
    width: 100vw;
    text-align: center;
    height: 8vh;
    line-height: 8vh;
    color: white;
    font-size: 3vh;
    background-color: #FFB319;
    margin-top: 45vh;
  }
</style>
