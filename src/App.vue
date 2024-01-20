<template>
<navigation-bar />
    <router-view></router-view>
<footer/>
</template>

<script>
import HomePage from '@/components/home-page.vue';
import NavigationBar from '@/components/navigation-bar.vue'
import Footer from '@/components/footer.vue';
import FavoriteStocks from '@/components/favorite-stocks.vue'


export default {
  components: {
    HomePage,
    NavigationBar,
    Footer,
    FavoriteStocks
  }
};
</script>
