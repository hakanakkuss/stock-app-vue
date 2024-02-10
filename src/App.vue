<template>
<navigation-bar />
    <router-view></router-view>
  <div class="bg-gray-700 mt-24 w-full h-40">
  <span class="flex items-center justify-center h-full">
        Footer
      </span>
  </div>
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
