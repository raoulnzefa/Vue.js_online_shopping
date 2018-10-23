<template>
    <div class="columns is-centered">
        <div class="bd-snippet-preview">
                <table class="table">
                    <thead>
                    <tr>
                        <th>ID</th>
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
                            {{item.title}}
                        </td>
                        <td class="has-text-centered">
                            {{item.price}}
                        </td>
                        <td class="has-text-centered">
                            {{item.quantity}}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="#" class="button is-warning">Вернуться назад</a>
                        </td>
                        <td></td>
                        <td class="has-text-centered" style="width: 200px; vertical-align: middle;">
                            <strong>
                                1200000 грн
                            </strong>
                        </td>
                        <td>
                            <a href="#" class="button is-success" @click="submitCheckout(userCart)">Оформить заказ</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters(['userCart', 'isUser'])
        },
        methods: {
            ...mapActions(['addToCheckout', 'submitCheckout'])
        }
    }
</script>