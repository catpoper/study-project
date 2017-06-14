<!--
Hot组件
展示Hot图标
例：
<icon-hot></icon-hot>
-->
<template>
    <div class="icon-hot">
      {{hot}}
    </div>
</template>
<script>
    export default {
      data () {
        return {
          hot: 'Hot'
        }
      }
    }
</script>
<style>
.icon-hot{
  width:8vw;
  height:8vw;
  border-radius: 50%;
  background-color: #ffb319;
  line-height: 8vw;
  font-size: 2rem;
  color: white;
}
</style>
