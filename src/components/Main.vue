<template>
    <div class="columns is-multiline">
        <product-item v-for="prod in products" :item="prod" :key="prod.id"></product-item>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import Product from './product/Product.vue';
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
            ...mapActions(['getProducts'])
        },
        created() {
            this.getProducts()
        }
    }
</script>

<style scoped lang="scss">
    .columns {
        margin-top: 40px;
    }
</style>