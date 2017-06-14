<template>
   <div id="header">
      <ul>
        <li class="person"><router-link :to="{path:'/personalCenterBg'}"><img src="../assets/老师.png" alt=""></router-link></li>
        <li @click='change'>{{msg}} <img src="../assets/箭头.png" alt="">
          <ul v-show="isShow">
            <li @click="topic"><router-link :to="path1"><span>{{title1}}</span></router-link></li>
            <li @click="notebook"><router-link :to="path2"><span>{{title2}}</span></router-link></li>
          </ul>
        </li>
        <li class="write" ><img v-show="isS" src="../assets/编辑.png" alt=""></li>
      </ul>
   </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        isShow: false
      }
    },
    methods: {
      change: function () {
        this.isShow = !this.isShow
      },
      topic: function (e) {
        this.msg = e.target.innerHTML
      },
      notebook: function (e) {
        this.msg = e.target.innerHTML
      }
    },
    props: ['msg', 'title1', 'title2', 'isS', 'path1', 'path2']
  }
</script>


<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
    color: white;
  }
  #header{
    position: fixed;
    top:0;
    width: 100%;
    height: 8vh;
    background-color: white;
    z-index: 999;
  }
  ul {
    list-style: none;
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #header>ul>li{
    color: #ffb319;
    font-size: 5vw;
    line-height: 8vh;
    height: 8vh;
    width: 33.3%;
  }
  .person{
    margin-left: 4vw;
  }
  .person img{
    width: 8vw;
    margin-top: 2vh;
    float: left;
  }
  .write{
    margin-right: 4vw;
  }
  .write img{
    width: 6.5vw;
    margin-top: 2.5vh;
    float: right;
  }
  ul>li>img{
    width: 5vw;
  }
  ul>li>ul{
    width: 20vw;
    background-color:#ffb319 ;
    opacity: 0.7;
    color: white;
    margin: 0 auto;
    font-size: 5vw;
    display: flex;
    flex-flow: column;
  }
  ul>li>ul>li{
    width: 100%;
    line-height: 4vh;
  }
</style>
