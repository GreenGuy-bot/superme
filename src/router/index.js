import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/Login.vue'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')
const profileMessage =()=>import('../views/profile/ThreeLevels/profileMessage.vue')
const profileAllOrder =()=>import('../views/profile/ThreeLevels/profileAllOrder.vue')
const profileAddress =()=>import('../views/profile/ThreeLevels/profileAddress.vue')
const profileComment =()=>import('../views/profile/profileSideBar/profileComment.vue')
const profileSetting =()=>import('../views/profile/profileSideBar/profileSetting.vue')
const feedBack =()=>import('../views/profile/profileSideBar/feedBack.vue')
const myMembers=()=>import('../views/profile/profileSideBar/myMembers.vue')
const history =()=>import('../views/profile/profileSideBar/history.vue')
const profileWallet =()=>import('../views/profile/ThreeLevels/profileWallet.vue')
const SearchResult =()=>import('../views/category/CategoryChild/SearchResult')
  const routes = [
    {
      path:'',
      redirect:'/login'
    },
    {
      path:'/login',
      component:Login
    },
    {
      path: '/home',
      component: Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/SearchResult',
      component:SearchResult
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/detail/:goodList',
      component:Detail,
    },
    {
      path:'/profile',
      component:Profile,
    },
    /**
     * 以下关于profile的一堆子组件
     */
        {
          path:'/profileComment',
          component:profileComment
        },
        {
          path:'/profileSetting',
          component:profileSetting,
        },
    {
      path:'/profileMessage',
      component:profileMessage
    },
    {
      path:'/profileAllOrder',
      component:profileAllOrder
    },
    {
      path:'/profileAddress',
      component:profileAddress
    },
    {
      path:'/feedBack',
      component:feedBack
    },
    {
      path:'/myMembers',
      component:myMembers
    },
    {
      path:'/history',
      component:history
    },
    {
      path:'/profileWallet',
      component:profileWallet
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
