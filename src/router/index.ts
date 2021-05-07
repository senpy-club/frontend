import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/language/:lang',
    name: 'Language',
    component: () => import('../views/Language.vue'),
  },
  {
    path: '/languages',
    name: 'languages',
    component: () => import('../views/Languages.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
