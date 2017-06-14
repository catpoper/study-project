<template>
  <div id="parent">
    <span>地砖规格</span>
    <select @change="onInput">
      <option selected>选择规格</option>
      <option>800mm*800mm</option>
      <option>600mm*600mm</option>
      <option>500mm*500mm</option>
      <option>400mm*400mm</option>
      <option>300mm*300mm</option>
    </select>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
      }
    },
    methods: {
      onInput: function (event) {
        if (event.target.value === '800mm*800mm') {
          console.log('1')
          this.$emit('message1', 0.64)
        } else if (event.target.value === '600mm*600mm') {
          console.log('1')
          this.$emit('message1', 0.36)
        } else if (event.target.value === '选择规格') {
          console.log('1')
          this.$emit('message1', false)
        } else if (event.target.value === '500mm*500mm') {
          console.log('1')
          this.$emit('message1', 0.25)
        } else if (event.target.value === '400mm*400mm') {
          console.log('1')
          this.$emit('message1', 0.16)
        } else if (event.target.value === '300mm*300mm') {
          console.log('1')
          this.$emit('message1', 0.09)
        }
      }
    },
    created: function () {
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
  .my{
    width:40%;
    overflow: hidden;
    margin-right: 2vw;
  }
  select {
    font-size: 36px;
    background: transparent;
    border: none;
    padding-left: 10px;
    width: 40%;
    height: 100%;
    margin-right: 2vw;
    direction: rtl;
    color: #b0b0b0;
    appearance:none;
  }
  span{
    margin-top:2.5vh;
    margin-left: 2vw;
  }
</style>
