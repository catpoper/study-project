<template>
  <div class="big">
    <span>{{msg}}</span><input type="text" v-model="tvalue"  @change="onInput" class="myinput" placeholder="请输入"><span class="danwei">{{msg1}}</span>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        tvalue: ''
      }
    },
    props: ['msg', 'msg1'],
    methods: {
      onInput: function () {
        if (this.tvalue) {
          this.$emit('message', this.tvalue)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .big{
    display: flex;
    width: 100%;
    height: 94px;
    font-size: 35px;
    justify-content:space-between;
    position: relative;
  }
  .myinput{
    width: 40vw;
    border:none;
    height:100%;
    font-size: 35px;
    text-align: right;
    right: 9.5vw;
    color: #c1c1c1;
    position: absolute;
    border: 0;
    outline:none;
  }
  span{
    margin-left: 2vw;
    line-height: 94px;
  }
  .danwei{
    margin-right: 1vw;
    color: #b0b0b0;
    display: inline-block;
    line-height: 94px;

  }
</style>
