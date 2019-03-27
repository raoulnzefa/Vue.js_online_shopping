import * as types from '../mutations-types'
import {firebaseAuth} from '../../db/config'
import {Toast} from 'buefy/dist/components/toast'
import {router} from '../../main'
import {i18n} from '../../lang/lang'

const state = {
    currentUser : {
        uid: '',
        userName: '',
        email: ''
    },
    isUser: firebaseAuth().currentUser != null,
    lang : i18n.locale
};

const mutations = {
    [types.SET_LANG] (state, lang) {
        state.lang = lang;
        i18n.locale = lang;
    },

    [types.USER_CHANGED] (state, {displayName, email, uid}) {
        let userName = displayName;
        state.isUser = true;
        state.currentUser = { ...state.currentUser, userName, email, uid};
    },

    [types.LOGOUT] (state) {
        state.isUser = false;
    },
};

const actions = {
    /*eslint-disable*/
    registerUser({}, {name, email, password}) {
        firebaseAuth()
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                if (user) {
                    Toast.open({
                        duration: 2000,
                        message: i18n.t('auth.success'),
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
    /*eslint-disable*/
    login({}, {email, password}) {
        return firebaseAuth().signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                Toast.open({
                    duration: 2000,
                    message: i18n.t('auth.successLogin') + ' '+ user.displayName,
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

    logout({commit}, router) {
        firebaseAuth().signOut();
        commit(types.LOGOUT);
        router.go('/');
    },

    firebaseAuthWatcher({commit, dispatch}) {
        firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                commit(types.USER_CHANGED, user);
                dispatch('getCartFromDB', user);
            }
        })
    },

    async setLang({commit}, lang) {
        if (lang in i18n.messages) {
            commit(types.SET_LANG, lang);
        } else {
            try {
                const res = await import(`../../lang/data/${lang}.json`);
                commit(types.SET_LANG, lang);
                i18n.setLocaleMessage(lang, res);
            }
            catch (e) {
                console.log(e)
            }
        }
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
