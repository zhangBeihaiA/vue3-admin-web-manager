import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import MainBox from '../views/MainBox.vue'
import RoutesConfig  from './config'
import store from '../store/index'

const routes = [
  {
    path:"/login", 
    name:'login',
    component: Login
  },
  {
    path:'/mainbox',
    name:'mainbox',
    component:MainBox,
    //嵌套路由根据权限动态添加
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// //动态添加路由
// router.addRoute("mainbox",{
//   path:"/index",
//   component:Home
// })
// router.addRoute("mainbox",{
//   //  加/后子路由由自己的路径 ，不加则没有（/mainbox/center）
//   path:"/center",
//   component:Center
// })
//每次路由跳转之前
router.beforeEach((to,from,next)=>{
  if(to.name==="login"){
    next()
  }else{
    //如果授权(已经登录过了，next()) 未授权，重定向到login
    if(!localStorage.getItem("token")){
      next({
        path:"/login"
      })
    }else{
      //第一次登录
      if(!store.state.isGetterRouter){
        ConfingRouter()
        next({
          path:to.fullPath
        })
      }else{
        next()
      }
      
    }
  }
})


const ConfingRouter = ()=>{
  RoutesConfig.forEach(item=>{
    router.addRoute("mainbox",item)
  })
  //改变isGeteerRouter
  store.commit("changeGetterRouter",true)
}

export default router
