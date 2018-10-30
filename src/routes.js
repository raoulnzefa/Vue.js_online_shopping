import Main from './components/ProductsList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import CategoriesView from './components/Categories.vue'
import ProductsList from './components/ProductsList.vue'
import ProductView from './components/ProductView.vue'
import NotFound from './components/NotFound.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import User from './components/User.vue'

export const routes = [
    {path: '/', component: Main, name: 'mainpage'},
    {path: '/categories', component: CategoriesView, name: 'categories'},
    {path: '/categories/:category', component: CategoriesView, name: 'categories'},
    {path: '/categories/:category/:subCategory', component: ProductsList, name: 'products'},
    {path: '/404', component: NotFound, name: 'not-found', props: {msg: 'Страница не найдена'}},
    {path: '/cart', component: ShoppingCart, name: 'shoppingCart'},
    {path: '/login', component: Login, name: 'login'},
    {path: '/register', component: Register, name: 'register'},
    {path: '/user', component: User, name: 'user'},
    // {path: '*', redirect: '/404'}
];