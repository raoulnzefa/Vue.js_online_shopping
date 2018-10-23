import * as types from '../mutations-types'
import {firebaseAuth, firebaseListen} from '../../db/config'
import {store} from '../store'
import {Toast} from 'buefy/dist/components/toast'
import {router} from '../../main'

const state = {
    currentUser : {
        uid: '',
        userName: '',
        email: ''
    },
    isUser: false
};

const mutations = {
    [types.UPDATE_PRODUCTS] (state, productList) {
        state.productList = productList;
    },

    [types.LOGOUT] (state) {
        state.isUser = false;
    },

    [types.USER_CHANGED] (state, {displayName, email, uid}) {
        let userName = displayName;
        state.isUser = true;
        state.currentUser = { ...state.currentUser, userName, email, uid};
    }
};

const actions = {
    registerUser({commit}, {name, email, password}) {
        firebaseAuth()
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                if (user) {
                    Toast.open({
                        duration: 2000,
                        message: 'Успех:)',
                        type: 'is-success'
                    });
                    user.updateProfile({
                        displayName: name
                    });
                    router.push({ path: '/' })
                }
            })
            .catch((error) => {
                let errorCode = error.code;
                if (errorCode == 'auth/weak-password') {
                    Toast.open({
                        duration: 2000,
                        message: 'Пароль слишком короткий',
                        type: 'is-danger'
                    });
                } else {
                    Toast.open({
                        duration: 2000,
                            message: error.message,
                            type: 'is-danger'
                    });
                }
            });
    },

    login({}, {email, password}) {
        return firebaseAuth().signInWithEmailAndPassword(email, password)
            .then(() => {
                Toast.open({
                    duration: 2000,
                    message: 'Вы успешно вошли, как'+' '+getters.currentUser(state).userName,
                    type: 'is-success'
                });
                router.push({ path: '/' })
            })
            .catch((error) => {
                Toast.open({
                    duration: 2000,
                    message: error.message,
                    type: 'is-danger'
                });
            });
    },

    logout({commit}) {
        firebaseAuth().signOut();
        commit(types.LOGOUT);
    },

    firebaseAuthWatcher({commit, dispatch}) {
        firebaseAuth().onAuthStateChanged((user) => {
            commit(types.USER_CHANGED, user);
        })
    }
};

const getters = {
    currentUser: (state) => {
        return state.currentUser
    },
    isUser: (state) => {
        return state.isUser
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}