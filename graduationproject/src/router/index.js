import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import admMain from '@/components/administrators/admMain'
import Login from '@/components/Login/Login'
import shopMain from '@/components/shopping/shopMain'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      children:[
        {
        path: '/admMain',
        name: 'admMain',
        component: admMain,
      },
        {
          path:'/shopMain',
          name:'shopMain',
          component:shopMain
        }]
    },


  ]
})
