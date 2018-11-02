<template>
    <div class="columns is-centered">
        <!--<div class="spinner-bg" v-show="isLoading">-->
            <!--<spinner></spinner>-->
        <!--</div>-->
        <div class="s-checkout-table" v-show="!isLoading" v-if="userCart.length">
                <table class="table">
                    <thead>
                    <tr>
                        <th class="order-id">ID</th>
                        <th>Продукт</th>
                        <th class="s-price-cell has-text-centered">Цена (грн)</th>
                        <th class="has-text-centered">Количество</th>
                        <th class="has-text-centered">Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item) in userCart">
                        <td>
                            {{item.id}}
                        </td>
                        <td class="s-product-cell">
                            <div class="s-product-cell-in">
                                <div class="s-checkout-img">
                                    <img :src="item.thumbnailUrl" alt="">
                                </div>
                                <router-link :to="'/categories/'+item.category+'/'+item.subCategory+'/'+ item.id">{{item.title}}</router-link>
                            </div>
                        </td>
                        <td class="s-price-cell has-text-centered">
                            {{item.price}}
                        </td>
                        <td class="has-text-centered">
                            {{item.quantity}}
                        </td>
                        <td class="has-text-centered">
                            <button class="button is-danger" @click="removeFromCheckout(item.id)">Удалить</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="s-checkout-footer">
                    <a class="button is-warning" href="jacascript:;" @click="$router.go(-1)">Вернуться назад</a>
                    <div class="has-text-centered">
                        <strong>{{totalPrice}} грн</strong>
                    </div>
                    <div>
                        <button class="button is-success" @click="submitCheckout(userCart)">Оформить заказ</button>
                    </div>
                </div>
            </div>
        <div class="is-centered" v-show="!isLoading" v-else>
            <h2>Ваша корзина пуста!</h2>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import Spinner from 'vue-simple-spinner'
    export default {
        components: {
            Spinner
        },
        computed: {
            ...mapGetters(['userCart', 'isUser', 'isLoading', 'totalPrice'])
        },
        methods: {
            ...mapActions(['addToCheckout', 'submitCheckout', 'getCartFromDB', 'removeFromCheckout'])
        }
    }
</script>