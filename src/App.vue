<template>
<navigation-bar />
    <router-view></router-view>
<footer/>
</template>

<script>
import HomePage from '@/components/home-page.vue';
import NavigationBar from '@/components/navigation-bar.vue'
import Footer from '@/components/footer.vue';


export default {
  components: {
    HomePage,
    NavigationBar,
    Footer,
  }
};
</script>
