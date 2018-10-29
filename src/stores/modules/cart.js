import Vue from 'vue'
import * as types from '../mutations-types'
import {db} from '../../db/config'
import {Toast} from 'buefy/dist/components/toast'
import {i18n} from '../../lang/lang'

const state = {
    userCart: [],
    totalPrice: 0
};

const mutations = {
    [types.UPDATE_CHECKOUT] (state, {item, isAdd, quantity}) {
        if (isAdd) {
            let id = item.id;
            let index = state.userCart.map((el) => {return el.id}).indexOf(id);
            if (index > -1) {
                Vue.set(state.userCart[index], 'quantity', quantity);
            }
        } else {
            state.userCart.push(item);
        }
    },

    [types.UPDATE_CHECKOUT_FROM_DB] (state, items) {
        state.userCart = items;
    },

    [types.REMOVE_CHECKOUT] (state, {id}) {
        let index = state.userCart.map((el) => {return el.id}).indexOf(id);
        if (index > -1) {
            state.userCart.splice(index, 1);
        }
    },

    [types.UPDATE_TOTAL_PRICE] (state, price) {
        state.totalPrice = price;
    }
};

const actions = {
    updateCheckout(context, removing) {
        let uid = context.rootGetters.currentUser.uid;
        db.ref('carts/' + uid)
            .set(context.getters.userCart)
            .then(() => {
                if (!removing) {
                    Toast.open({
                        duration: 500,
                        message: i18n.t('added'),
                        type: 'is-success'
                    })
                } else {
                    Toast.open({
                        duration: 500,
                        message: i18n.t('removed'),
                        type: 'is-success'
                    })
                }
            })
            .catch((err) => {
                Toast.open({
                    duration: 2000,
                    message: err.message,
                    type: 'is-danger'
                });
            });
    },

    updateTotalPrice(context) {
        let priceArr = context.state.userCart.reduce((sum, el) => {
            return sum + (el.price * el.quantity);
        }, 0);
        context.commit(types.UPDATE_TOTAL_PRICE, priceArr);
    },

    addToCheckout(context, item) {
        let userCartGetter = context.getters.userCart;
        let record = userCartGetter.filter(el => {
            return el.id == item.id
        });
        let isAdd = false;
        let quantity = 1;
        let prevQuantity;

        if (record.length > 0) {
            isAdd = !isAdd;
            prevQuantity = record[0].quantity;
            quantity = prevQuantity + 1;
        }
        item.quantity = quantity;
        context.commit(types.UPDATE_CHECKOUT, {item, isAdd, quantity});
        context.dispatch('updateTotalPrice', userCartGetter);
        context.dispatch('updateCheckout', false);
    },

    removeFromCheckout(context, id) {
        let userCartGetter = context.getters.userCart;
        let removing = true;
        context.commit(types.REMOVE_CHECKOUT, {id});
        context.dispatch('updateTotalPrice', userCartGetter);
        context.dispatch('updateCheckout', removing);
    },

    getCartFromDB(context, user) {
        let uid = user.uid;
        db.ref('carts/' + uid).once('value')
            .then((data) => {
                if (data.val()) {
                    context.commit(types.UPDATE_CHECKOUT_FROM_DB, data.val());
                    context.dispatch('updateTotalPrice');
                    context.commit(types.LOADED);
                }
            })
            .catch((err) => {
                Toast.open({
                    duration: 2000,
                    message: err.message,
                    type: 'is-danger'
                });
            })
    },

    submitCheckout(context) {
        if (!context.rootGetters.currentUser.uid) {
            Toast.open({
                duration: 2000,
                message: i18n.t('auth.continue'),
                type: 'is-danger'
            });
        }
    },
};

const getters = {
    userCart: (state) => {
        return state.userCart
    },
    totalPrice: (state) => {
        return state.totalPrice
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}