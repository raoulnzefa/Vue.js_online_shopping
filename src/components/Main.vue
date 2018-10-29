<template>
    <div>
        <div class="spinner-bg" v-show="isLoading">
            <spinner></spinner>
        </div>
        <div class="columns is-multiline" v-show="!isLoading">
            <product-item v-for="prod in products" :item="prod" :key="prod.id"></product-item>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import Spinner from 'vue-simple-spinner'
    import Product from './product/Product.vue'
    import {app} from '../main'

    export default {
        components: {
            ProductItem: Product,
            Spinner
        },
        computed: {
            ...mapGetters(['products', 'isLoading'])
        },
        data() {
            return {
                show: false
            }
        },
        methods: {
            ...mapActions(['updateProducts']),
            animateElem() {
                this.show = !this.show;
            }
        },
        created() {
            this.updateProducts();
        }
    }
</script>

<style lang="scss">
    img {
        width: auto !important;
        max-width: 100% !important;
        margin: 0 auto;
    }

    .centered-content {
        text-align: left;
        .column {
            margin: 0 auto;
        }
    }

    .card {
        height: 100%;
    }
</style>