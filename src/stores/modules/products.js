import * as types from '../mutations-types'
import {db} from '../../db/config'
import {Toast} from 'buefy/dist/components/toast'
import {Loading} from 'buefy/dist/components/loading'

const state = {
    products: [],
    categories: []
};

const mutations = {
    [types.UPDATE_PRODUCTS] (state, productList) {
        state.products = Object.assign({}, state.products,  productList);
    },
    [types.UPDATE_CATEGORIES] (state, categories) {
        state.categories = Object.assign({}, state.categories,  categories);
    }
};

const actions = {
    updateProducts({commit}, {category, subCategory}) {
        db.ref('products/'+category+'/categories/'+subCategory).on("value", (products) => {
            console.log(products.val())
            commit(types.UPDATE_PRODUCTS, products.val());
            // commit(types.LOADED);
        }, (errorObject) => {
            console.log("The read failed: " + errorObject.code);
        });
    },
    getCategories({commit}) {
        db.ref('categories').on("value", (products) => {
            let catList = products.val();
            commit(types.UPDATE_CATEGORIES, catList);
        }, (errorObject) => {
            console.log("The read failed: " + errorObject.code);
        });
    }
};

const getters = {
    products: state => {
        return state.products;
    },
    categories: state => {
        return state.categories;
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}