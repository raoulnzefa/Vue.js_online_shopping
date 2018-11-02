import * as types from '../mutations-types'
import {db} from '../../db/config'
import {Toast} from 'buefy/dist/components/toast'
import {Loading} from 'buefy/dist/components/loading'

const state = {
    products: [],
    categories: [],
    path: [
        {
            title: "Главная",
            link: "/"
        }
    ]
};

const mutations = {
    [types.UPDATE_PRODUCTS] (state, productList) {
        state.products = Object.assign({}, state.products,  productList);
    },
    [types.UPDATE_CATEGORIES] (state, categories) {
        state.categories = Object.assign({}, state.categories,  categories);
    },
    [types.UPDATE_PATH] (state, path) {
        // let found = state.path.some(function (el) {
        //     return el.link === path;
        // });
        // if (!found) {
        //     state.path.push({
        //         title: "Test",
        //         link: path
        //     });
        // }
    }
};

const actions = {
    updateProducts({commit}, {category, subCategory}) {
        db.ref('products/'+category+'/categories/'+subCategory).on("value", (products) => {
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
    },
    getCurrentPath(context, {path}) {
        context.commit(types.UPDATE_PATH, path)
    }
};

const getters = {
    products: state => {
        return state.products;
    },
    path: state => {
        return state.path;
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