<template>
  <div class="mt-12 max-w-2xl flex items-center justify-center mx-auto">
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
  <div class="flex items-center justify-center mt-12">
    <el-input
        v-model="searchText"
        placeholder="Search Stock..."
        @input="handleSearch"
        class="max-w-52">
    </el-input>
  </div>
  <div class="mt-14 flex mx-auto justify-center items-center">
    <el-table :data="filteredData" height="437" border align="center" class="contentBg" :search="{ filterMethod: customFilterMethod }">
      <el-table-column prop="code" label="Code" width="200" sortable>
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
      <el-table-column prop="rate" label="Rate" width="200" sortable align="center"/>
      <el-table-column prop="max" label="Max" width="200" sortable align="center"/>
      <el-table-column prop="min" label="Min" width="200" sortable align="center"/>
      <el-table-column prop="time" label="Time" width="200" align="center"/>
    </el-table>
  </div>
<register-page/>
</template>

<script setup>
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';
import {useStore} from "vuex";
import RegisterPage from "@/components/register-page.vue";

const favoritesArray = ref([]);
const stocks = ref([]);
const searchText = ref('');
const store = useStore();

    onMounted(() => {
      // fetchData()
      const favorites = localStorage.getItem('favorites');
      if (favorites) {
        favoritesArray.value = JSON.parse(favorites);
      }
    });

    const customFilterMethod = (value, row) => {
      const code = row.code.toString().toLowerCase();
      return code.includes(value.toLowerCase());
    };
    const favoriteStock = (row) => {
      if(this.favoritesArray.length < 5) {
        row.favorite = !row.favorite;
        this.favoritesArray.push(row.code)
        this.$store.dispatch('addToFavorites', row);
        localStorage.setItem('favorites', JSON.stringify(this.favoritesArray));
      }else {
        this.$message({
          type: 'warning',
          message: `You should <a style="text-decoration: underline; font-style: italic;" href="#login">sign up</a> for more!`,
          dangerouslyUseHTMLString: true,
          style: `width:250px; height:80px; margin-top:80px;`
        });
      }
    };

    const filteredData = computed(() => {
      return stocks.value.filter(item => {
        const code = item.code.toString().toLowerCase();
        return code.includes(searchText.value.toLowerCase());
      });
    });
    const fetchData = () => {
      axios.get('https://ca79813d-1c69-48a7-86d6-318a2de6a65c.mock.pstmn.io/stocks')
          .then(response => {
            stocks.value = response.data.result;
          })
          .catch(error => {
            console.error('Error:', error);
          });
    };
</script>
