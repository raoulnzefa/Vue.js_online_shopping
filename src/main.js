import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import {store} from './stores/store'

Vue.use(VueFire);
Vue.use(VueRouter);
Vue.use(Buefy);

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')