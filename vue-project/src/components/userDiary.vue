<template>
  <div>
    <div id="img"  v-for="item in diary" v-if="num==1">
      <img :src="item.src" alt="">
      <div>
        <div class="titleDiv">
          <p class="title">{{item.title}}</p>
          <p class="date">{{item.date}}</p>
        </div>
      </div>
      <div class="signDiv">
        <p v-for="signVal in item.sign">#{{signVal}}#</p>
      </div>
    </div>
    <div v-if="num==0" id="none">
      <img src="../assets/diary.png" alt="">
      <p>快去发表日记吧~</p>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        diary: [
          {src: '../../static/diaryImg/diary1.jpg', title: '简简单单就好', date: '2015.11.11', sign: ['阳光', '简装', '小户型', '拆改']},
          {src: '../../static/diaryImg/diary2.jpg', title: '每天都要好生活', date: '2016.04.05', sign: ['阳台', '沙发', '欧式', '简约']},
          {src: '../../static/diaryImg/diary3.jpg', title: '沐浴阳光', date: '2017.02.11', sign: ['花园', '田园', '复古']}
        ],
        num: 1
      }
    },
    components: {},
    created: function () {
      if (this.diary.length === 0) {
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
  .title{
    float: left;
    margin-left: 5vw;
    font-size: 2.6vh;
    line-height: 5vh;
  }
  .date{
    float: right;
    margin-right: 5vw;
    font-size: 2vh;
    line-height: 5vh;
    color: #999999;
  }
  .titleDiv{
    margin-top: 1vh;
    height: 5vh;
  }
  .signDiv{
    width: 100vw;
    height: 4vh;
    display: flex;
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
    font-size: 3vh;
    color: #999999;
    padding-top: 3vh;
  }
</style>
