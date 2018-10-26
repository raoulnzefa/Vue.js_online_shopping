import Main from './components/Main.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import ProductView from './components/ProductView.vue'
import NotFound from './components/NotFound.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import User from './components/User.vue'

export const routes = [
    {path: '/', component: Main, name: 'mainpage'},
    {path: '/product/:id', component: ProductView, name: 'product'},
    {path: '/404', component: NotFound, name: 'not-found', props: {msg: 'Страница не найдена'}},
    {path: '/cart', component: ShoppingCart, name: 'shoppingCart'},
    {path: '/login', component: Login, name: 'login'},
    {path: '/register', component: Register, name: 'register'},
    {path: '/user', component: User, name: 'user'},
    {path: '*', redirect: '/404'}
];