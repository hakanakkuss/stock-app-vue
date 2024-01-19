<!-- src/App.vue -->
<template>
  <div>

<navigation-bar />
    <router-view></router-view>
  </div>
</template>

<script>
import HomePage from '@/components/home-page.vue';
import NavigationBar from '@/components/navigation-bar.vue'

export default {
  components: {
    HomePage,
    NavigationBar
  }
};
</script>
