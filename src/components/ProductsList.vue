<template>
    <div>
        <!--<div class="spinner-bg" v-show="isLoading">-->
            <!--<spinner></spinner>-->
        <!--</div>-->
        <!--<breadcrumbs></breadcrumbs>-->
        <!--<products-filter :products="products"></products-filter>-->
        <div class="title">
            Категория: {{products.catName}}
        </div>
        <div class="columns is-multiline">
            <product-item v-for="prod in products.products" :item="prod" :key="prod.id"></product-item>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import Spinner from 'vue-simple-spinner'
    import Product from './product/Product.vue'
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
            ...mapActions(['updateProducts'])
        },
        computed: {
            ...mapGetters(['products'])
        },
        mounted() {
            let category = this.$route.params.category;
            let subCategory = this.$route.params.subCategory;
            this.updateProducts({category, subCategory})
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