import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DataBinding from '../views/DataBinding.vue';
import ListBinding from '../views/ListBinding.vue';
import IFBinding from '../views/IFBinding.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dataBinding',
    name: 'dataBinding',
    component: DataBinding
  },
  {
    path: '/listBinding',
    name: 'listBinding',
    component: ListBinding
  },
  {
    path: '/ifBinding',
    name: 'ifBinding',
    component: IFBinding
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
