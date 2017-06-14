<template>
  <div>
    <div class="header">
      <div class="personnal"><router-link :to="{path:'/personalCenterBg'}"><img src="../assets/老师.png" alt=""></router-link></div>
      <h3>装修计算器</h3>
    </div>
    <ul>
      <li v-for="key in gongju" transition="expand">
        <div @click="clickFn(key.url)" >
        <img :src="key.src" alt="">
        <p>{{key.name}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        gongju: [
          {'name': '地砖', 'src': require('../assets/gongju_dz.png'), url: '/dizhuan'},
          {'name': '地板', 'src': require('../assets/gongju_db.png'), url: '/diban'},
          {'name': '涂料', 'src': require('../assets/gongju_tuliao.png'), url: '/tuliao'},
          {'name': '壁纸', 'src': require('../assets/gongju_bizhi.png'), url: '/bizhi'}
        ]
      }
    },
    methods: {
      clickFn: function (a) {
        this.$router.push({ path: a })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    height: 8vh;
    width: 100%;
    position: relative;
    line-height: 8vh;
    font-size: 4vw;
    color: #ffb319;
    letter-spacing: 0.5vw;
  }
  .personnal{
    margin: 0;
    position: absolute;
    left: 4vw;
    top: 3vw;
  }
  .personnal img{
    width: 8vw;
    height: 8vw;
    margin: 0;
  }
  ul{
  margin-top:70px ;
  }
  li{
    display: inline-block;
    list-style: none;
    width: 40vw;
    height: 25vh;
  }
  img{
    height:8vh;
    margin-top: 5vh;
  }
  li:nth-of-type(1){
    border-bottom: 2px solid #ffb51c;
    border-right: 2px solid #ffb51c;
  }
  li:nth-of-type(4){
  border-top:  2px solid #ffb51c;
  border-left: 2px solid #ffb51c;
  margin-left: -1px;
  margin-top: -1px;
  }
  p{
    font-size: 40px;
  }
  .expand-transition {
    transition: all .3s ease;
    height: 30px;
    padding: 10px;
    background-color: #eee;
    overflow: hidden;
  }
  .expand-enter, .expand-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
  }

</style>
