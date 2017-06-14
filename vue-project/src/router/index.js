import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import topic from '@/components/topic'
import note from '@/components/note'
import topicdetail from '@/components/topicdetail'
import noteDetail from '@/components/noteDetail'
import personalCenterBg from '@/components/personalCenterBg'
import personalCenter from '@/components/personalCenter'
import UserDiary from '@/components/userDiary'
import UserChat from '@/components/userChat'
import UserCollection from '@/components/userCollection'
import Loading from '@/components/loading'
import Register from '@/components/register'
import Forget from '@/components/forgetPwd'
import Setting from '@/components/setting'
import SettingMain from '@/components/settingMain'
import ClearRom from '@/components/clearRom'
import ShareTo from '@/components/shareTo'
import UserFeedback from '@/components/userFeedback'
import AboutUs from '@/components/aboutUs'
import Gongju from '@/components/gongju'
import Dizhuan from '@/components/dizhuan'
import Diban from '@/components/diban'
import Bizhi from '@/components/bizhi'
import Tuliao from '@/components/tuliao'
import area from '@/components/area'
import news from '@/components/news'
import top from '@/components/top'
import topDetail from '@/components/topDetail'
import welcom from '@/components/welcom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: '/',
          component: area,
          children: [
            {
              path: '/',
              component: topic
            },
            {
              path: '/Hello/topic',
              component: topic
            },
            {
              path: '/Hello/note',
              component: note
            }
          ]
        },
        {
          path: '/tools',
          name: 'Gongju',
          component: Gongju
        },
        {
          path: '/news',
          name: '贴士',
          component: news,
          children: [
            {
              path: '/news/top',
              name: '专题',
              component: top
            }
          ]
        }
      ]
    },
    {
      path: '/topicdetail',
      name: 'hello',
      component: topicdetail
    },
    {
      path: '/topDetail',
      name: 'topDetail',
      component: topDetail
    },
    {
      path: '/personalCenterBg',
      name: 'personalCenterBg',
      component: personalCenterBg
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: personalCenter,
      children: [
        {
          path: '/',
          component: UserDiary
        },
        {
          path: '/user/userDiary',
          component: UserDiary
        },
        {
          path: '/user/userChat',
          component: UserChat
        },
        {
          path: '/user/userCollection',
          component: UserCollection
        }
      ]
    },
    {
      path: '/loading',
      component: Loading
    },
    {
      path: '/setting',
      component: Setting,
      children: [
        {
          path: '/',
          component: SettingMain
        }
      ]
    },
    {
      path: '/clearRom',
      component: ClearRom
    },
    {
      path: '/shareTo',
      component: ShareTo
    },
    {
      path: '/userFeedback',
      component: UserFeedback
    },
    {
      path: '/aboutUs',
      component: AboutUs
    },
    {
      path: '/user/register',
      component: Register
    },
    {
      path: '/user/forget',
      component: Forget
    },
    {
      path: '/noteDetail',
      name: 'hello',
      component: noteDetail
    },

    {
      path: '/dizhuan',
      name: 'Dizhuan',
      component: Dizhuan
    },
    {
      path: '/diban',
      name: 'Dizhuan',
      component: Diban
    },
    {
      path: '/bizhi',
      name: 'Dizhuan',
      component: Bizhi
    },
    {
      path: '/tuliao',
      name: 'Dizhuan',
      component: Tuliao
    },
    {
      path: '/welcom',
      name: '引导',
      component: welcom
    }
  ]
})
