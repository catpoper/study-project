<template>
  <ul>
    <li>
      <img src="../assets/personalCenter.png" alt="">
      <router-link to="/personalCenter" class="myRouter">
        <p>个人中心</p>
      </router-link>
    </li>
    <router-link to="/loading">
      <li>
        <img src="../assets/collection.png" alt="">
        <p>登陆</p>
      </li>
    </router-link>
    <router-link to="/setting">
      <li>
        <img src="../assets/diary.png" alt="">
        <p>设置</p>
      </li>
    </router-link>
    <li>
      <img src="../assets/chat.png" alt="">
      <p>话题</p>
    </li>
    <li>
      <img src="../assets/friend.png" alt="">
      <p>好友</p>
    </li>
    <li>
      <img src="../assets/message.png" alt="">
      <p>消息</p>
    </li>
  </ul>
</template>

<script>
  export default{
    data () {
      return {
        msg: 'hello Samadhi'
      }
    },
    components: {}
  }
</script>

<style scoped>
  li{
    display: flex;
    height: 5vh;
    line-height: 5vh;
    margin-top: 5vh;
    font-size: 4vh;
    color: white;
    width: 50vw;
    margin-left: 30vw;
    list-style: none;
  }
  p{
    margin-left: 5vw;
    color: white;
  }
  img{
    width: 5vh;
  }
  .myRouter{
    text-decoration: none;
  }
</style>
