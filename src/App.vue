<!-- src/App.vue -->
<template>
  <div>


    <router-view></router-view>
  </div>
</template>

<script>
import HomePage from '@/components/home-page.vue';

export default {
  components: {
    HomePage
  }
};
</script>
