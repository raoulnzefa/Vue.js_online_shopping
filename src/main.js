import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import {store} from './stores/store'
import {routes} from './routes'

Vue.use(VueRouter);
Vue.use(Buefy);

export const router = new VueRouter({
    mode: 'history',
    routes
});

const vm = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');