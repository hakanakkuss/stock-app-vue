<template>
  <div>
    <div class="justify-center flex mt-10" v-if="favorites.length > 0">
      <ul>
        <li v-for="favorite in favorites" :key="favorite.code">
          {{ favorite.code }}
        </li>
      </ul>
    </div>
    <div v-else class="justify-center flex">
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
  },
};
</script>
