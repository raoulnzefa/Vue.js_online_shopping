<template>
    <div class="columns is-multiline">
        <product-item v-for="prod in products" :item="prod" :key="prod.id"></product-item>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import Product from './product/Product.vue'
    import {db} from '../db/config'

    export default {
        components: {
            ProductItem: Product
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters(['products'])
        },
        methods: {
            ...mapActions(['updateProducts'])
        },
        created() {
            this.updateProducts()
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