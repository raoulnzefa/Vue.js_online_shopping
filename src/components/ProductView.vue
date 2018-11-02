<template>
    <div>
        <!--<div class="spinner-bg" v-show="isLoading">-->
            <!--<spinner></spinner>-->
        <!--</div>-->
        <breadcrumbs :path="path"></breadcrumbs>
        <div v-if="productFound">
            <div class="s-product">
                <div class="s-product-in">
                    <div class="thumbnail">
                        <img :src="product.thumbnailUrl" alt="">
                    </div>
                    <div class="desc">
                        <div class="title">{{product.title}}</div>
                        <div class="caption">{{product.description}}</div>
                        <div class="price">{{product.price}} грн.</div>
                        <a class="button is-primary" @click="addToCheckout({product, category, subCategory})">Вкорзину</a>
                    </div>
                </div>
            </div>
        </div>
        <!--<not-found v-bind:msg="notFoundText" v-else></not-found>-->
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import Spinner from 'vue-simple-spinner'
    import NotFound from './NotFound'
    import Breadcrumbs from './breadcrumbs/Breadcrumbs'

    export default {
        components: {
            NotFound,
            Spinner,
            Breadcrumbs
        },
        data() {
            return {
                productFound: true,
                notFoundText: 'Товар не найден'
            }
        },
        computed: {
            ...mapGetters(['products', 'path']),
            product() {
                let prId = this.$route.params.id;
                if (prId > this.products.length) {
                    return {};
                } else {
                    let filtered = this.products.products.filter(el => {
                        return el.id == prId
                    });
                    return filtered[0];
                }
            },
            category() {
                return this.$route.params.category;
            },
            subCategory() {
                return this.$route.params.subCategory;
            }
        },
        methods: {
            ...mapActions(['addToCheckout', 'updateProducts', 'getCurrentPath'])
        },
        mounted() {
            let category = this.category;
            let subCategory = this.subCategory;
            this.updateProducts({
                category,
                subCategory
            });
            this.getCurrentPath(this.$route);
        }
    }
</script>