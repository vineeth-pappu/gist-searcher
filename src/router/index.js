import Vue from 'vue'
import VueRouter from 'vue-router'
import GistHome from "../views/GistHome";
import GistDetails from "../views/GistDetails";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: GistHome
  },
  {
    path: '/gist/:gistId',
    name: 'GistDetails',
    component: GistDetails
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
