import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index.js'
import StartPage from '../components/StartPage.vue'
import FirstPage from '../components/FirstPage.vue'
import SecondPage from '../components/SecondPage.vue'
import ThirdPage from '../components/ThirdPage.vue'
import ForthPage from '../components/ForthPage.vue'
import FifthPage from '../components/FifthPage.vue'
import FinalPage from '../components/FinalPage.vue'


const routes = [
  {
      path: '/',
      component: StartPage,
      name: 'start'
  },
  {
      path: '/title',
      component: FirstPage,
      name: 'title',
  },
  {
      path: '/description',
      component: SecondPage,
      name: 'description',
      beforeEnter: () => {
          if (!store.state.userCard.title) return false
      }
  },
  {
      path: '/time',
      component: ThirdPage,
      name: 'time',
      beforeEnter: () => {
          if (!store.state.userCard.description) return false
      }
  },
  {
      path: '/doer',
      component: ForthPage,
      name: 'doer',
      beforeEnter: () => {
          if (store.state.userCard.time < 1 || store.state.userCard.time > 100) return false
      }
  },
  {
      path: '/apps',
      component: FifthPage,
      name: 'apps',
      beforeEnter: () => {
          if (!store.state.userCard.doer) return false
      }
  },
  {
      path: '/card',
      component: FinalPage,
      name: 'card',
      beforeEnter: () => {
          if (!store.state.userCard.apps.length) return false
      }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
