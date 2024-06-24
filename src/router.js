import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/views/Layout/DashboardLayout'
import AuthLayout from '@/views/Pages/AuthLayout'
import store from './store'

Vue.use(Router)

// export const router =  new Router({
export default new Router({
  // linkExactActiveClass: 'active',
  mode: 'history',
  // hash: false,
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          // beforeEnter : guardMyroute,
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "EGAT" */ './views/Dashboard.vue')
        },
        {
          path: '/battery',
          name: 'battery',
          // beforeEnter : guardMyroute,
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "EGAT" */ './views/Battery.vue')
        },
        {
          path: '/energy',
          name: 'Energy',
          // beforeEnter : guardMyroute,
          component: () => import(/* webpackChunkName: "EGAT" */ './views/Energy.vue')
        },
        // {
        //   path: '/icons',
        //   name: 'icons',
        //   beforeEnter : guardMyroute,
        //   component: () => import(/* webpackChunkName: "EGAT" */ './views/Icons.vue')
        // },
        {
          path: '/profile',
          name: 'profile',
          // beforeEnter : guardMyroute,
          component: () => import(/* webpackChunkName: "EGAT" */ './views/UserProfile.vue')
        },
        // {
        //   path: '/maps',
        //   name: 'maps',
        //   component: () => import(/* webpackChunkName: "EGAT" */ './views/Maps.vue')
        // },
        // {
        //   path: '/tables',
        //   name: 'tables',
        //   component: () => import(/* webpackChunkName: "EGAT" */ './views/Tables.vue')
        // }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "EGAT" */ './views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          // beforeEnter : guardMyroute,
          component: () => import(/* webpackChunkName: "EGAT" */ './views/Register.vue')
        }
      ]
    },
    { path: '*', redirect: '/' }, // catch all use case
  ]
  
});
// async function guardMyroute(to, from, next){
//   // // redirect to login page if not logged in and trying to access a restricted page
//   const loggedIn = await store.getters.getState.token;
//   console.log(!!loggedIn,from.path,to.path)

//   // confirm("From: "+ from.name + "\nTo: "+ to.name +"\nToken: "+loggedIn)
//   if (loggedIn) {
//     return next()
//   }
//   else {
//     console.log("ERROR")
//     return next({name: 'login'})
//   }
// }
