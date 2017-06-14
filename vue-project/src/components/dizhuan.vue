<template>
  <div>
    <div class="dizhuan1">
      <span><img src="../assets/jiantou.png"  alt="" @click="goback"></span>
      <span>地砖计算</span>
      <span @click="zaijisuan">计算</span>
    </div>
    <div class="yanse"></div>
    <div class="homew"><my-bizhi msg="房间长度" msg1="米" v-on:message="recieveMessage1"></my-bizhi></div>
    <div class="homew"><my-bizhi msg="房间宽度" msg1="米" v-on:message="recieveMessage2"></my-bizhi>
    </div>
    <div class="yanse"></div>
    <div class="homew"><my-dizhuangg v-on:message1="selected1"></my-dizhuangg></div>
    <div class="yanse"></div>
    <div class="homew1">
      <div class="zidingyi"><span>自定义</span></div>
      <div class="zidingyi1">
        <my-bizhi msg="地砖长度" msg1="毫米" v-on:message="recieveMessage3"></my-bizhi>
        <my-bizhi msg="地砖宽度" msg1="毫米" v-on:message="recieveMessage4"></my-bizhi>
      </div>
    </div>
    <h1  :opacity="popupVisible" class="tanchu">{{MessageBox.message}}</h1>
  </div>
</template>
<script>
  import dizhuangg from '@/components/dizhuangg'
  import bizhi from '@/components/bizhiguige'

  export default {
    name: '',
    data () {
      return {
        num: false,
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
      'my-dizhuangg': dizhuangg,
      'my-bizhi': bizhi
    },
    methods: {
      goback: function () {
        this.$router.go(-1)
      },
      selected1: function (text) {
        this.num = text
      },
      recieveMessage1: function (text) {
        this.num1 = text
      },
      recieveMessage2: function (text) {
        this.num2 = text
      },
      recieveMessage3: function (text) {
        this.num3 = text
      },
      recieveMessage4: function (text) {
        this.num4 = text
      },
      zaijisuan: function () {
        if (this.num1 > 0 && this.num2 > 0 && this.num3 > 0 && this.num4 > 0 && this.num === false) {
          this.MessageBox.message = '你需要的地板是' + Math.ceil(parseFloat((this.num1 * this.num2 * 1.05) / (this.num4 / 1000 * this.num3 / 1000))) + '块'
          this.popupVisible = true
        } else if (this.num) {
          this.MessageBox.message = '你需要的地板是' + Math.ceil(parseFloat(this.num1 * this.num2 * 1.05) / this.num) + '块'
          this.popupVisible = true
        } else {
          this.MessageBox.message = '请正确输入'
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
  span{margin-top:-1vh}
  .dizhuan1>span:nth-of-type(2){
    color: #ffb51c;
  }
  .dizhuan1 > span > img{
    width: 3vw;
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
  .tanchu{
    width: 100%;
    font-size: 3vh;
    margin-left: 2vw;
    text-align: left;
    margin-top: 2vh;
    color: #ffb51c;
  }
</style>
