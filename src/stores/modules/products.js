import * as types from '../mutations-types'
import {db} from '../../db/config'
import {Toast} from 'buefy/dist/components/toast'
import {Loading} from 'buefy/dist/components/loading'

const state = {
    products: []
};

const mutations = {
    [types.UPDATE_PRODUCTS] (state, productList) {
        state.products = productList;
    }
};

const actions = {
    updateProducts({commit}) {
        db.ref('notebooks').on("value", (products) => {
            commit(types.UPDATE_PRODUCTS, products.val());
            commit(types.LOADED);
        }, (errorObject) => {
            console.log("The read failed: " + errorObject.code);
        });
    }
};

const getters = {
    products: state => {
        return state.products;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}