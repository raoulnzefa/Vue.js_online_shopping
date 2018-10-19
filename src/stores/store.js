import Vue from 'vue'
import Vuex from 'vuex';
import cart from './modules/cart';
import products from './modules/products';
import auth from './modules/auth';
// import messages from './modules/messages';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        cart,
        products,
        auth
    }
    // messages
});

