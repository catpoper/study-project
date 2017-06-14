<template>
   <div id="note">
     <ul>
       <li v-for="item in note">
         <router-link :to="{path:'/noteDetail', query: {title1:item.title,title2:item.title2,img1: item.noteD1,img2: item.noteD2,img3: item.noteD3,img4: item.noteD4,img5: item.noteD5,img8: item.noteD8,img6: item.noteD6,img7: item.noteD7,text1:item.text1,text2:item.text2,text3:item.text3,text4:item.text4,user: item.user,userpic:item.userPic, style: item.style}}">
           <div class="mainbody">
             <div class="hot">
               <hot></hot>
             </div>
             <img :src="item.imgSrc" alt="">
             <div class="house">
               <img src="../../static/house2.png" alt="">
             </div>
             <div class="title" >
               <div>
                 <h5>{{item.title}}</h5>
                 <p><img src="../assets/qian.png" alt=""><span v-for="val in item.style">#{{val}}# </span></p>
               </div>
             </div>
           </div>
           <div class="user">
             <div><img :src="item.userPic" alt=""></div>
             <div>
               <h5>{{item.user}}</h5>
               <p>{{item.title2}}</p>
             </div>
           </div>
         </router-link>
         <div class="wrap">
           <div class="icon">
             <div class="star">
               <star :star="item.star" src="../../static/星星_1.png" color="color:white"></star>
             </div>
             <div class="messg">
               <messg :messg="item.reply" src="../../static/消息.png" color="color:white"></messg>
             </div>
             <div class="share">
               <share :share="item.share" src="../../static/分享2.png" color="color:white"></share>
             </div>
           </div>
         </div>
       </li>
     </ul>
   </div>
</template>
<script>
  import star from './icon-star.vue'
  import share from './icon-share.vue'
  import messg from './icon-messg.vue'
  import hot from './icon-hot.vue'
  export default {
    name: 'hello',
    data () {
      return {
        msg: '',
        note: ''
      }
    },
    components: {
      'star': star,
      'share': share,
      'messg': messg,
      'hot': hot
    },
    created () {
      this.$http.get('static/data.json', {}, {
        emulateJSON: true
      }).then(function (resp) {
        console.log(resp.data)
        this.note = resp.data.note
      })
    }
  }
</script>
<style scoped>
 #note{
   margin-top: 8vh;
 }
  ul li{
    width: 100%;
    position: relative;
    margin-bottom: 8vh;
  }
  .mainbody {
    position: relative;
  }
  .mainbody img{
    width: 100%;
  }
  .mainbody .house {
   position: absolute;
   background-color: black;
   opacity: 0.3;
   width: 100%;
   height: 100%;
   top: 0;
 }
 .mainbody .hot{
   position: absolute;
   right: 3vw;
   top: 3vw;
   z-index: 999;
 }
 .wrap{
   height: 6vh;
   border-bottom: 1px solid #999;
   position: absolute;
   right: 0;
   bottom: 10vh;
   z-index: 999;
 }
 .wrap .icon{
   width: 50vw;
   height: 6vh;
   float: right;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-right: 2vw;
 }
  .mainbody .house img{
    display: block;
    width: 50%;
    margin: 0 auto;
    margin-top: 10%;
  }
  .title{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title h5{
    font-size: 5vw;
  }
  .title p{
    font-size: 4vw;
    margin-top: 5vw;
  }
 .title p span{
   padding: 0 2vw;
 }
  .title p img{
   width: 4vw;
 }
  .user{
    background-color: white;
    text-align: left;
    margin-top: 3vw;
    overflow: hidden;
    border-bottom: 1px solid #888;
  }
  .user div{
    float: left;
    margin-left: 4vw;
  }
 .user div img{
   width: 12vw;
 }
  .user h5{
    font-size: 4vw;
    color: #818181;
    padding-bottom:1vw;

  }
  .user p{
    font-size: 3.5vw;
    color: #ababaa;
    padding-bottom: 3.5vw;
  }


</style>
