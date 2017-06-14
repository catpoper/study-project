<template>
  <div>
    <div id="img"  v-for="item in chat" v-if="num==1">
      <img :src="item.src" alt="">
      <p class="title">#{{item.title}}#</p>
      <div>
        <div class="titleDiv">
          <p class="btn">{{item.sign}}</p>
        </div>
      </div>
    </div>
    <div v-if="num==0" id="none">
      <img src="../assets/chat.png" alt="">
      <p>快去发表话题吧~</p>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        chat: [
          {src: '../../static/diaryImg/chat1.jpg', title: '跪求大神设计，改采光，增大空间感', sign: '按钮'},
          {src: '../../static/diaryImg/chat2.jpg', title: '小户型门厅设计有什么攻略', sign: '按钮'},
          {src: '../../static/diaryImg/chat3.jpg', title: '求各位大神推荐衣帽间的搁置', sign: '按钮'}
        ],
        num: 1
      }
    },
    components: {},
    created: function () {
      if (this.chat.length === 0) {
        this.num = 0
      }
    }
  }
</script>

<style scoped>
  #img{
    background-color: white;
    width: 100vw;
    margin-top: 2vh;
  }
  #img>img{
    width: 100vw;
    height: 50vw;
  }
  .btn{
    float: left;
    margin-left: 5vw;
    font-size: 2.6vh;
    line-height: 5vh;
  }
  .titleDiv{
    margin-top: 1vh;
    height: 5vh;
  }
  .title{
    width: 100vw;
    height: 7vh;
    background-color: black;
    text-align: center;
    opacity: .7;
    color: white;
    margin-top: -7.4vh;
    line-height: 7vh;
    font-size: 2.5vh;
  }
  .signDiv>p{
    line-height: 4vh;
    margin-left: 5vw;
    font-size: 2vh;
    color: #999999;
  }
  #none{
    width: 100vw;
    height: 53vh;
    text-align: center;
  }
  #none>img{
    width: 30vw;
    margin-top: 7vh;
  }
  #none>p{
    font-size: 2.6vh;
    color: #999999;
    padding-top: 3vh;
  }
</style>
