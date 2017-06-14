<template>
  <ul>
    <router-link to="/user/userDiary" class="myLink">
      <li :class='{setColor:isTrue1}' @click="colorSet1">日记</li>
    </router-link>
    <router-link to="/user/userChat" class="myLink">
      <li :class='{setColor:isTrue2}' @click="colorSet2">话题</li>
    </router-link>
    <router-link to="/user/userCollection" class="myLink">
      <li :class='{setColor:isTrue3}' @click="colorSet3">收藏</li>
    </router-link>
  </ul>
</template>

<script>
  export default{
    data () {
      return {
        isTrue1: false,
        isTrue2: false,
        isTrue3: false
      }
    },
    components: {},
    methods: {
      colorSet1: function () {
        this.isTrue1 = true
        this.isTrue2 = false
        this.isTrue3 = false
      },
      colorSet2: function () {
        this.isTrue2 = true
        this.isTrue1 = false
        this.isTrue3 = false
      },
      colorSet3: function () {
        this.isTrue3 = true
        this.isTrue1 = false
        this.isTrue2 = false
      }
    },
    created: function () {
      this.isTrue1 = true
    }
  }
</script>

<style scoped>
  ul{
    width: 100vw;
    display: flex;
  }
  li{
    width: 33.333333vw;
    text-align: center;
    list-style: none;
    background-color: white;
    height: 6vh;
    line-height: 6vh;
    font-size: 2.6vh;
    border-bottom: 0.3vh solid transparent;
  }
  .setColor{
    color: #F5B02B;
    border-bottom: 0.3vh solid #F5B02B;
  }
  .myLink{
    text-decoration: none;
    color: black;
  }
</style>
