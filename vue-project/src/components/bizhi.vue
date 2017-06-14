<template>
  <div>
    <div class="dizhuan1">
      <span><img src="../assets/jiantou.png"  alt="" @click="goback"></span>
      <span>壁纸计算</span>
      <span @click="jisuan">计算</span>
    </div>
    <div class="yanse"></div>
    <div class="homew"><my-bizhi msg="房间长度" msg1="米" v-on:message="recieveMessage1"></my-bizhi></div>
    <div class="homew"><my-bizhi msg="房间宽度" msg1="米" v-on:message="recieveMessage2"></my-bizhi></div>
    <div class="homew"><my-bizhi msg="房间高度" msg1="米" v-on:message="recieveMessage3"></my-bizhi></div>
    <div class="yanse"></div>
    <div class="homew"><my-bizhi msg="壁纸规格" msg1="平米/卷" v-on:message="recieveMessage4"></my-bizhi></div>
    <div class="homeww"><span>5.2平方每卷是行业平均标准</span></div>
    <h1  :opacity="popupVisible" class="tanchu">{{MessageBox.message}}</h1>
  </div>
</template>
<script>
  import bizhi from '@/components/bizhiguige'

  export default {
    name: '',
    data () {
      return {
        num1: null,
        num2: null,
        num3: null,
        num4: null,
        MessageBox: {
          message: '',
          showCancelButton: true
        },
        popupVisible: false
      }
    },
    components: {
      'my-bizhi': bizhi
    },
    methods: {
      goback: function () {
        this.$router.go(-1)
      },
      recieveMessage1: function (text) {
        this.num1 = text
        console.log(this.num1)
      },
      recieveMessage2: function (text) {
        this.num2 = text
        console.log(this.num2)
      },
      recieveMessage3: function (text) {
        this.num3 = text
        console.log(this.num3)
      },
      recieveMessage4: function (text) {
        this.num4 = text
        console.log(this.num4)
      },
      jisuan: function () {
        if (this.num1 > 0 && this.num2 > 0 && this.num3 > 0 && this.num4 > 0) {
          this.MessageBox.message = '你需要的壁纸是' + Math.ceil(parseFloat((this.num1 * this.num2 + this.num1 * this.num3 + this.num2 * this.num3) / this.num4)) + '卷'
          this.popupVisible = true
        } else {
          this.MessageBox.message = '请输入正确数据'
          this.popupVisible = true
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dizhuan1{
    display:flex;
    height: 80px;
    width: 100%;
    font-size: 42px;
    justify-content:space-between
  }
  .dizhuan1 > span > img{
    width: 3vw;
  }
  span{margin-top:-1vh}
  .dizhuan1>span:nth-of-type(2){
    color: #ffb51c;
  }
  .dizhuan1>span:nth-of-type(1){
    font-size: 30px;
    margin-left: 2vh;
    width: 5vw;
  }
  .dizhuan1>span:nth-of-type(3){
    font-size: 35px;
    color: #ffb51c;
    margin-right: 2vh;
  }
  .yanse{
    height: 20px;
    width: 100%;
    background: #f4f4f2;
  }
  .homew{
    height: 100px;
    font-size: 36px;
    border-bottom: 2px solid #dfdfdd;
    overflow: hidden;
  }
  .zidingyi{
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    border-bottom: 2px solid #dfdfdd;
  }
  .zidingyi1{
    height: 200px;
    width: 100%;
  }
  .zidingyi>span{
    margin-left: 2vh;
    line-height: 100%;
    height: 100%;
    margin-top: 2vh;
    font-size: 36px;
  }
  .homew1{
    height: 100%;
    font-size: 36px;
    overflow: hidden;
  }
  .homeww{
    margin-top: 2vh;padding-left: 2vh;
    color:#ffb51c;
    font-size: 30px;
    display: flex;
    justify-content: flex-start;
  }
  .tanchu{
    width: 100%;
    font-size: 3vh;
    margin-left: 2vw;
    text-align: left;
    margin-top: 2vh;
    color: #ffb51c;
  }
</style>
