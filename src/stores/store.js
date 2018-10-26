import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import auth from './modules/auth'
import * as types from './mutations-types'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        isLoading: true
    },

    mutations: {
        [types.LOADED](state) {
            state.isLoading = false;
        }
    },

    actions: {
        loaded({commit}) {
            commit(types.LOADED);
        }
    },

    getters: {
        isLoading: state => {
            return state.isLoading;
        }
    },

    modules: {
        auth,
        cart,
        products
    }
});

