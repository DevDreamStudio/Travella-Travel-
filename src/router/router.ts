

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage/HomePage.vue';
const routes: Array<RouteRecordRaw> = [
    {
        name: 'Home',
        path: '/',
        component: HomePage,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    
});

export default router;