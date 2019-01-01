
import Home from './views/home/Home.vue'
import User from './views/user/User.vue'
import SurveyUser from './views/user/SurveyUser.vue'
import AddUser from './views/user/AddUser.vue'

const menu = [
  {
    name: '首页统计',
    icon: 'iconfont icon-shouye',
    path: '/',
    component: Home
  },
  {
    name: '用户管理',
    icon: 'iconfont icon-yonghu',
    path: '/user',
    component: User,
    children: [
      {
        name: '用户新建',
        icon: 'iconfont icon-check-circle',
        path: '/user/add-user',
        component: AddUser
      },
      {
        name: '用户统计',
        icon: 'iconfont icon-check-circle',
        path: '/user/user-survey',
        component: SurveyUser
      }
    ]
  }
]

export default menu
