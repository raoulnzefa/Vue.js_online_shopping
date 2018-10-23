<template>
    <div>
        <div class="product" v-if="productsFound">
            <div class="thumbnail">
                <img :src="product.thumbnail_url"
                     alt="Placeholder image">
            </div>
            <div class="desc">
                <h2>
                    {{product.title}}</h2>
                <div class="caption">
                    {{product.description}}
                </div>
                <div class="price">
                    {{product.price}}
                    грн.
                </div>
            </div>
            <div class="actions">
                <a class="button is-primary" @click="addToCheckout(product)">Вкорзину</a>
            </div>
        </div>
        <not-found v-bind:msg="notFoundText" v-else></not-found>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import NotFound from './NotFound'

    export default {
        components: {
            NotFound
        },

        data() {
            return {
                productsFound: true,
                notFoundText: 'Товар не найден'
            }
        },

        computed: {
            ...mapGetters(['products']),
            product() {
                let prId = this.$route.params.id;
                if (prId > this.products.length) {
                    return {};
                } else {
                    let filtered = this.products.filter(el => {
                        return el.id == prId
                    });
                    return filtered[0];
                }
            }
        },

        watch: {
            product: function (newVal, oldVal) {
                if (!newVal.id) {
                    this.productsFound = false
                }
            }
        },

        methods: {
            ...mapActions(['updateProducts', 'addToCheckout'])
        },

        mounted() {
            this.updateProducts();
        }
    }
</script>

<style scoped>
    .product {
        max-width: 600px;
        margin: 0 auto;
        border: 1px solid #aeaeae54;
        padding: 20px;
    }

    img {
        max-height: 300px;
    }

    .desc {
        text-align: left;
    }

    h2 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .price {
        font-weight: bold;
        margin-top: 5px;
        margin-bottom: 5px;
    }
</style>