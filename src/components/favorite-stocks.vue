<template>
  <div>
    <div v-if="favorites.length > 0">
      <h2>Favorite Stocks</h2>
      <ul>
        <li v-for="favorite in favorites" :key="favorite">
          {{ favorite }}
        </li>
      </ul>
    </div>
    <div v-else>
      <span>No favorite stocks added yet.</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    favorites() {
      return this.$store.getters.getFavorites;
    }
  }
};
</script>
