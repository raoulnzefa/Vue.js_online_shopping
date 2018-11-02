import ShoppingCart from './components/ShoppingCart.vue'
import CategoriesView from './components/Categories.vue'
import ProductsList from './components/ProductsList.vue'
import ProductView from './components/ProductView.vue'
import NotFound from './components/NotFound.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import User from './components/User.vue'

export const routes = [
    {path: '/', component: CategoriesView, name: 'categories'},
    {path: '/categories', component: CategoriesView, name: 'categories'},
    {path: '/categories/:category', component: CategoriesView, name: 'categories'},
    {path: '/categories/:category/:subCategory', component: ProductsList, name: 'products'},
    {path: '/categories/:category/:subCategory/:id', component: ProductView, name: 'product'},
    {path: '/cart', component: ShoppingCart, name: 'shoppingCart'},
    {path: '/login', component: Login, name: 'login', meta: {onlyGuest: true}},
    {path: '/register', component: Register, name: 'register', meta: {onlyGuest: true}},
    {path: '/user', component: User, name: 'user', meta: {onlyGuest: true}},
    {path: '/404', component: NotFound, name: 'not-found', props: {msg: 'Страница не найдена'}},
    // {path: '*', redirect: '/404'}
];