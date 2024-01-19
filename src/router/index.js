import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/home-page.vue';
import GoldDetail from "@/components/gold-detail.vue";
import StockDetail from "@/components/stock-detail.vue";


const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/gold',
        component: GoldDetail,
    },
    {
        path: '/stock-detail',
        component: StockDetail,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
