<template>
  <div id="myDiv">
    <div id="img"  v-for="item in chat" v-if="num==1">
      <img :src="item.src" alt="">
      <p class="title">{{item.title}}</p>
      <div>
      </div>
    </div>
    <div v-if="num==0" id="none">
      <img src="../assets/collection.png" alt="">
      <p>您还没有收藏哦~</p>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        chat: [
          {src: '../../static/diaryImg/collection1.jpg', title: '设计，改采光，增大空间感'},
          {src: '../../static/diaryImg/collection2.jpg', title: '小户型门厅设计攻略'},
          {src: '../../static/diaryImg/collection3.jpg', title: '衣帽间的搁置攻略'}
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
  #myDiv{
    background-color: #f4f4f4;
  }
  #img{
    background-color: white;
    width: 100vw;
    margin-top: 2vh;
  }
  #img>img{
    width: 100vw;
    height: 50vw;
  }
  .title{
    width: 100vw;
    height: 7vh;
    background-color: black;
    text-align: center;
    opacity: .7;
    color: white;
    margin-top: -7.3vh;
    line-height: 7vh;
    font-size: 2.5vh;
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
