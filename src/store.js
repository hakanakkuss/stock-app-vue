// store.js

import { createStore } from 'vuex';

export default createStore({
    state: {
        favoritesArray: []
    },

    mutations: {
        addToFavorites(state, code) {
            state.favoritesArray.push(code);
            console.log('New favorites array:', state.favoritesArray);
        }
    },
    actions: {
        addFavorite({ commit, state }, code) {
            if (state.favoritesArray.length < 5) {
                commit('addToFavorites', code);
            } else {
                console.warn('You cannot add more favorites.');
            }
        }
    },
    getters: {
        getFavorites: state => {
            console.log("state",state)
            console.log("state",state.favoritesArray)
            return state.favoritesArray;
            console.log("state1",state)
            console.log("state1",state.favoritesArray)
        },
        isFavorite: state => code => {
            return state.favoritesArray.includes(code);
        }
    }
});
