<template>
  <div id="parent">
    <span>地板规格</span>
    <select @change="onInput" >
      <option selected>选择规格</option>
      <option>600mm*90mm</option>
      <option>750mm*90mm</option>
      <option>900mm*90mm</option>
      <option>1285mm*192mm</option>
    </select>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {}
    },
    methods: {
      onInput: function () {
        if (event.target.value === '600mm*90mm') {
          console.log('1')
          this.$emit('message1', 0.054)
        } else if (event.target.value === '选择规格') {
          console.log('1')
          this.$emit('message1', false)
        } else if (event.target.value === '750mm*90mm') {
          console.log('1')
          this.$emit('message1', 0.0675)
        } else if (event.target.value === '900mm*90mm') {
          console.log('1')
          this.$emit('message1', 0.081)
        } else if (event.target.value === '1285mm*192mm') {
          console.log('1')
          this.$emit('message1', 0.247)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #parent {
    width: 100%;
    height: 100px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
  }

  #parent select {
    font-size: 36px;
    background: transparent;
    border: none;
    padding-left: 10px;
    width: 40%;
    height: 100%;
    margin-right: 2vw;
    direction: rtl;
    color: #b0b0b0;
  }
  span{
    margin-top:2.5vh;
    margin-left: 2vw;
  }
</style>
