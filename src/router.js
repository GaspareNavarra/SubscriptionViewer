import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/components/pages/HomePage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/SubscriptionViewer'},
        {path: '/SubscriptionViewer', component: HomePage},
        {},
    ]
});
export default router;