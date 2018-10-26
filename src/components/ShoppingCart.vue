<template>
    <div class="columns is-centered">
        <div class="spinner-bg" v-show="isLoading">
            <spinner></spinner>
        </div>
        <div class="bd-snippet-preview" v-show="!isLoading" v-if="userCart.length">
                <table class="table">
                    <thead>
                    <tr>
                        <th class="order-id">ID</th>
                        <th>Продукт</th>
                        <th class="has-text-centered">Цена (грн)</th>
                        <th class="has-text-centered">Количество</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item) in userCart">
                        <td>
                            {{item.id}}
                        </td>
                        <td>
                            <img class="order-img" :src="item.thumbnail_url" alt="">
                            <span>{{item.title}}</span>
                        </td>
                        <td class="has-text-centered">
                            {{item.price}}
                        </td>
                        <td class="has-text-centered">
                            {{item.quantity}}
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="full-table">
                    <a href="#" class="button is-warning">Вернуться назад</a>
                    <div class="has-text-centered" style="width: 200px; vertical-align: middle;">
                        <strong>
                            {{totalPrice}} грн
                        </strong>
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
            ...mapActions(['addToCheckout', 'submitCheckout', 'getCartFromDB'])
        }
    }
</script>

<style scoped lang="scss">
    .order-id {
        width: 25px;
    }

    .order-img {
        margin-right: 10px;
        display: inline-block;
        vertical-align: middle;
        max-width: 60px !important;
    }
    .order-img + span {
        display: inline-block;
        vertical-align: middle;
    }

    .full-table {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .bd-snippet-preview {
        margin-bottom: 40px;
        width: 80%;

        .table {
            width: 100%;
        }
    }
</style>