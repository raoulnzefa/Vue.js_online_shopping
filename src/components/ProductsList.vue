<template>
    <div>
        <!--<div class="spinner-bg" v-show="isLoading">-->
            <!--<spinner></spinner>-->
        <!--</div>-->
        <!--<breadcrumbs></breadcrumbs>-->
        <!--<products-filter :products="products"></products-filter>-->
        <breadcrumbs :path="path"></breadcrumbs>
        <div class="s-page-title">Категория: {{products.catName}}</div>
        <div class="columns is-multiline">
            <product-item v-for="prod in products.products" :product="prod" :category="$route.params.category" :subCategory="$route.params.subCategory" :key="prod.id"></product-item>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import Spinner from 'vue-simple-spinner'
    import Product from './products/ProductItem.vue'
    import Breadcrumbs from './breadcrumbs/Breadcrumbs'
    import productsFilter from './filter/productsFilter'
    import {app} from '../main'

    export default {
        components: {
            ProductItem: Product,
            Spinner,
            productsFilter,
            Breadcrumbs
        },
        data() {
            return {
//                show: false
            }
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