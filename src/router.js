import Vue from 'vue'
import Router from 'vue-router'
import AccueilView from './views/AccueilView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: AccueilView
    },
    {
        path: '/FinalesGeneral',
        name: 'FinalesGeneral',
        component: () => import('./views/FinalesGeneralView.vue')
    },
    {
        path: '/PoulesABC',
        name: 'PoulesABC',
        component: () => import('./views/PoulesABCView.vue')
    },
    {
         path: '/TimelinePoules',
         name: 'TimelinePoules',
         component: () => import('./views/TimelinePoulesView.vue')
    }
  ]
})