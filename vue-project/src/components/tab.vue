<template>
  <mt-tabbar :fixed="true" v-model="selected">
    <mt-tab-item  id="area">
      <img slot="icon" :src="iconsrc">
      <router-link to="/Hello/topic">
        社区
      </router-link>
    </mt-tab-item>
    <mt-tab-item id="news">
      <img slot="icon" :src="iconsrc2">
      <router-link to="/news/top">
        贴士
     </router-link>
    </mt-tab-item>
    <mt-tab-item id="tools">
      <img slot="icon" :src="iconsrc3">
      <router-link :to="{path:'/tools'}">
        工具
      </router-link>
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>
  export default {
    data () {
      return {
        name: 'tab',
        selected: 'area',
        iconsrc: '../../static/com.png',
        iconsrc2: '../../static/news1.png',
        iconsrc3: '../../static/tools1.png'
      }
    },
    watch: {
      selected: function (val, oldVal) {
        console.log(val)
        if (val === 'area') {
          this.iconsrc = '../../static/com.png'
          this.iconsrc2 = '../../static/news1.png'
          this.iconsrc3 = '../../static/tools1.png'
        }
        if (val === 'news') {
          this.iconsrc2 = '../../static/news.png'
          this.iconsrc3 = '../../static/tools1.png'
          this.iconsrc = '../../static/area.png'
        }
        if (val === 'tools') {
          this.iconsrc3 = '../../static/tools.png'
          this.iconsrc2 = '../../static/news1.png'
          this.iconsrc = '../../static/area.png'
        }
      }
    }
  }
</script>
<style>
  .mint-tabbar.is-fixed{
    background-color: white!important;
    opacity: 0.9!important;
    color: #818181!important;
    z-index: 999!important;
  }
  .mint-tab-item-label{
    font-size: 4vw!important;
  }
  .mint-tabbar > .mint-tab-item.is-selected{
    color: #ffb319!important;
    background-color: white!important;
  }
  .mint-tab-item-icon{
    width: 8vw!important;
    height: 8vw!important;
  }
</style>
