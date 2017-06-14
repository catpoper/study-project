<template>
  <div class="settingMenu">
    <router-link to="/clearRom" class="router">
      <div class="settingTab">
        <p>清理缓存</p>
        <img src="../assets/front.png" alt="">
      </div>
    </router-link>
    <div class="settingTo">
      <p>推送通知</p>
      <div class="checkbox" @click="setCheck" :class='{checkboxTrue:isTrue}'>
          <div class="check" :class='{checkTrue:isTrue}'>

          </div>
      </div>
    </div>
    <router-link to="/shareTo" class="router">
      <div class="settingTab">
        <p>分享给好友</p>
        <img src="../assets/front.png" alt="">
      </div>
    </router-link>
    <router-link to="/userFeedback" class="router">
      <div class="settingTab">
        <p>用户反馈</p>
        <img src="../assets/front.png" alt="">
      </div>
    </router-link>
    <router-link to="aboutUs" class="router">
      <div class="settingTab">
        <p>关于</p>
        <img src="../assets/front.png" alt="">
      </div>
    </router-link>
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
      setCheck: function () {
        this.isTrue = !this.isTrue
      }
    }
  }
</script>

<style scoped>
  .settingTab{
    display: flex;
    height: 8vh;
    position: relative;
    background-color: white;
    line-height: 8vh;
    color: #999999;
    font-size: 2.6vh;
    border-bottom: .2vh solid #f4f4f4;
  }
  .settingTab>p{
    margin-left: 3vh;
  }
  .settingTab>img{
    width: 3vh;
    height: 3vh;
    position: absolute;
    right: 3vh;
    margin-top: 2.5vh;
  }
  .settingTo{
    display: flex;
    height: 8vh;
    position: relative;
    background-color: white;
    line-height: 8vh;
    color: #999999;
    font-size: 2.6vh;
    margin-top: 1.5vh;
    margin-bottom: 1.5vh;
  }
  .settingTo>p{
    margin-left: 3vh;
  }
  .checkbox{
    background-color: #e0e0e0;
    width: 5vh;
    height: 2vh;
    border-radius: 1vh;
    margin-top: 3vh;
    position: absolute;
    right: 3vh;
  }
  .check{
    background-color: #ffb11e;
    width: 2.5vh;
    height: 2.5vh;
    margin-top: -.25vh;
    border-radius: 50%;
    transition: .3s linear;
    /*margin-left: 2.5vh;*/
  }
  .checkTrue{
    margin-left: 2.5vh;
    transition: .3s linear;
  }
  .checkboxTrue{
    background-color: #fcdbb2;
  }
  .router{
    color: #999999;
    text-decoration: none;
  }
</style>
