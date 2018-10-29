import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import {store} from './stores/store'
import {routes} from './routes'
import {i18n} from './lang/lang'

Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(VueAxios, axios)

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