import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/home.vue'),
  },
  {
    path: '/:id',
    name: 'HomeDetail',
    component: () => import('../views/Home/detail.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
