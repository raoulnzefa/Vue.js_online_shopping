<template>
    <div>
        <div class="columns is-multiline">
            <product-item v-for="prod in products.products" :product="prod" :category="$route.params.category" :subCategory="$route.params.subCategory" :key="prod.id"></product-item>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import Product from './products/ProductItem.vue'
    import ProductsFilter from './filter/productsFilter'

    export default {
        components: {
            ProductItem: Product,
            ProductsFilter
        },
        methods: {
            ...mapActions(['updateProducts', 'getCurrentPath'])
        },
        computed: {
            ...mapGetters(['products', 'path'])
        },
        mounted() {
            let category = this.$route.params.category;
            let subCategory = this.$route.params.subCategory;
            this.updateProducts({category, subCategory});
            this.getCurrentPath(this.$route);
        }
    }
</script>