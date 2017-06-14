<template>
  <div id="personal">
    <user-avatar id="userAvatar"></user-avatar>
    <personal-friend></personal-friend>
  </div>
</template>

<script>
  import UserAvatar from './personalAvatar'
  import UserFriend from './userFriend'
  export default{
    data () {
      return {
        msg: 'hello Samadhi'
      }
    },
    components: {
      'user-avatar': UserAvatar,
      'personal-friend': UserFriend
    }
  }
</script>

<style scoped>
  #personal{
    background-image: url("../assets/personalBg.png");
    width: 100vw;
    height: 55vw;
    background-size: cover;
  }
  #userAvatar{
    margin-left: 40vw;
    margin-top: 8vh;
  }
</style>
