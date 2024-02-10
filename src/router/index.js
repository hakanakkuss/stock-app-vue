import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/home-page.vue';
import GoldDetail from "@/components/gold-detail.vue";
import StockDetail from "@/components/stock-detail.vue";
import FavoriteStocks from "@/components/favorite-stocks.vue";


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
        path: '/favorites',
        component: FavoriteStocks,
    },
    {
        name: 'StockDetail',
        path: '/:code',
        component: StockDetail,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
