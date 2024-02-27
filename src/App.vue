<template>
  <div class="contentBg">
    <navigation-bar />
    <router-view></router-view>
    <div class="bg-gray-700 w-full h-40 fixed bottom-0">
  <span class="flex items-center justify-center h-full">
    Footer
  </span>
    </div>
  </div>
</template>

<script>
import HomePage from '@/components/home-page.vue';
import NavigationBar from '@/shared/navigation-bar.vue'
import FooterPage from '@/shared/footer-page.vue';
import FavoriteStocks from '@/components/favorite-stocks.vue'
export default {
  components: {
    HomePage,
    NavigationBar,
    FooterPage,
    FavoriteStocks
  }
};
</script>

<!--<style>-->
<!--/*.contentBg {*/-->
<!--/*  background: linear-gradient(to right, rgba(245, 245, 245, .8), rgba(245, 245, 245, .8)), url(src/assets/common-bg.svg);*/-->
<!--/*  height: 100vh;*/-->
<!--/*  min-height: 73rem;*/-->
<!--/*  position: relative;*/-->
<!--//}-->
<!--</style>-->
