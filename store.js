
import { createStore } from 'vuex';

export default createStore({
    state: {
        favoritesArray: []
    },

    mutations: {
        addToFavorites(state, code) {
            state.favoritesArray.push(code);
        }
    },
    actions: {
        addToFavorites({ commit, state }, code) {
            if (state.favoritesArray.length < 5) {
                commit('addToFavorites', code);
            } else {
                console.warn('You cannot add more favorites.');
            }
        }
    },
    getters: {
        getFavorites: state => {
            return state.favoritesArray;
        },
        isFavorite: state => code => {
            return state.favoritesArray.includes(code);
        }
    }
});
