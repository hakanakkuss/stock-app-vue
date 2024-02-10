<template>
  <div class="mt-24 max-w-2xl flex items-center justify-center mx-auto">
    <span class="text-slate-600 text-lg font-extralight text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
  </div>
  <el-alert
      v-if="favoritesArray.length > 15"
      title="Warning Alert"
      type="warning"
      show-icon
      center
  />
  <div class="flex items-center justify-center mt-16">
    <el-input
        v-model="searchText"
        placeholder="Search Stock..."
        @input="handleSearch"
        class="max-w-52">
    </el-input>
  </div>
   <div class="mt-16 flex mx-auto justify-center items-center">
     <el-table :data="filteredData" width="300" height="630" border align="center" :search="{ filterMethod: customFilterMethod }">
       <el-table-column prop="code" label="Code" width="180" sortable>
         <template v-slot="{ row }" >
           <el-icon class="mx-6" :size="16" :color="'green'">
             <StarFilled v-if="row.favorite" @click="favoriteStock(row)" />
             <Star v-else @click="favoriteStock(row)" />
           </el-icon>
           <router-link class="text-neutral-800 font-semibold" :to="{ name: 'StockDetail', params: { code: row.code } }">
             {{ row.code }}
           </router-link>
         </template>
       </el-table-column>
       <el-table-column prop="rate" label="Rate" width="180" sortable align="center"/>
       <el-table-column prop="max" label="Max" width="180" sortable align="center"/>
       <el-table-column prop="min" label="Min" width="180" sortable align="center"/>
       <el-table-column prop="time" label="Time" width="180" align="center"/>
     </el-table>
   </div>
</template>

<script>

import axios from 'axios';

export default {
  methods: {
    customFilterMethod(value, row) {
      const code = row.code.toString().toLowerCase();
      return code.indexOf(value.toLowerCase()) > -1;
    },
    favoriteStock(row) {
      if(this.favoritesArray.length < 5) {
        row.favorite = !row.favorite;
        this.favoritesArray.push(row.code)
        this.$store.dispatch('addToFavorites', row);
        localStorage.setItem('favorites', JSON.stringify(this.favoritesArray));

      }else {
        this.$message({
          type: 'warning',
          message: 'You should sign up for more!',
          style: `width:250px; height:80px; margin-top:80px`
        });
      }

    },
    fetchData() {
      axios.get('https://c28c32a8-dafe-42d2-a2f8-2cbb85eafa58.mock.pstmn.io/stocks')
          .then(response => {
            this.stocks = response.data.result;
          })
          .catch(error => {
            console.error('Error:', error);
          });
    }
  },
  created() {
    this.fetchData();
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      this.favoritesArray = JSON.parse(favorites);
    }
  },
  computed: {
    filteredData() {
      // Arama işlemi için filtreleme metodu
      return this.stocks.filter(item => {
        const code = item.code.toString().toLowerCase();
        return code.indexOf(this.searchText.toLowerCase()) > -1;
      });
    }
  },

data() {
  return {
    favoritesArray : [],
    stocks : [],
    searchText: ''
  }
}

}

</script>

