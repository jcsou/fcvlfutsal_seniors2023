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
        path: '/PoulesABC',
        name: 'PoulesABC',
        component: () => import('./views/PoulesABCView.vue')
    },
    {
        path: '/PoulesDEF',
        name: 'PoulesDEF',
        component: () => import('./views/PoulesDEFView.vue')
    },
    {
        path: '/FinalesGeneral',
        name: 'FinalesGeneral',
        component: () => import('./views/FinalesGeneralView.vue')
    },
    {
        path: '/FinalesConsolante',
        name: 'FinalesConsolante',
        component: () => import('./views/FinalesConsolanteView.vue')
    },
    {
         path: '/TimelinePoules',
         name: 'TimelinePoules',
         component: () => import('./views/TimelinePoulesView.vue')
    },
    {
         path: '/TimelineFinales',
         name: 'TimelineFinales',
         component: () => import('./views/TimelineFinalesView.vue')
    }
  ]
})