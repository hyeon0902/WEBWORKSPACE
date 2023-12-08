import { createRouter, createWebHistory } from 'vue-router'
import mainView from '../views/MainComponent.vue';
import empList from '../views/EmpList.vue';
import empInfo from '../views/EmpInfo.vue';
import empForm from '../views/EmpFormView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: mainView
  },
  {
    path: '/empList',
    name: 'empList',
    component: empList
  },
  {
    path: '/empInfo',
    name: 'empInfo',
    component: empInfo
  },
  {
    path: '/empForm',
    name: 'empForm',
    component: empForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
