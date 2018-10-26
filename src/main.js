import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import {store} from './stores/store'
import {routes} from './routes'
import {i18n} from './lang/lang'

Vue.use(VueRouter)
Vue.use(Buefy)

export const router = new VueRouter({
    mode: 'history',
    routes
});

export var app = new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
})