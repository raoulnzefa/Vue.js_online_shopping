import Vue from 'vue'
import * as types from '../mutations-types'
import {db} from '../../db/config'
import {Toast} from 'buefy/dist/components/toast'

const state = {
    userCart: []
};

const mutations = {
    [types.UPDATE_CHECKOUT] (state, {item, userCartGetter, isAdd, quantity}) {
        if (isAdd) {
            let id = item.id;
            let index = state.userCart.map((el) => {return el.id}).indexOf(id);
            Vue.set(state.userCart[index], 'quantity', quantity);
        } else {
            state.userCart.push(item);
        }
    },
};

const actions = {
    updateCheckout({commit}, user) {
        // let uid = user.uid;
        // db.ref('carts/' + uid).on('value', (products) => {
        //     console.log(products.val())
        // }, (errorObject)  => {
        //     console.log("The read failed: " + errorObject.code);
        // });
    },

    addToCheckout(context, item) {
        let uid = context.rootGetters.currentUser.uid;
        let userCartGetter = context.getters.userCart;
        let record = userCartGetter.filter(el => {
            return el.id == item.id
        });
        let isAdd = false;
        let quantity = 1;

        if (record.length > 0) {
            isAdd = !isAdd;
            let prevQuantity = record[0].quantity;
            quantity = prevQuantity + 1;
            context.commit(types.UPDATE_CHECKOUT, {item, userCartGetter, isAdd, quantity});
        } else {
            item.quantity = 1;
            context.commit(types.UPDATE_CHECKOUT, {item, isAdd});
        }
        // return db.ref('carts/' + uid).push(item)
        //     .then(() => {
        //         Toast.open({
        //             duration: 500,
        //             message: 'Товар добавлен в корзину',
        //             type: 'is-success'
        //         });
        //     })
        //     .catch((err) => {
        //         Toast.open({
        //             duration: 2000,
        //             message: err.message,
        //             type: 'is-danger'
        //         });
        //     });
    },

    submitCheckout({commit}, cart) {
        console.log(cart)
    }
};

const getters = {
    userCart: (state) => {
        return state.userCart
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}