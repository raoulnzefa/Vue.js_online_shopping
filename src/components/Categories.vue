<template>
    <div>
        <breadcrumbs :path="path"></breadcrumbs>
        <div class="columns is-multiline" v-if="!isSubCategory">
            <div class="column is-4" v-for="(cat, key) in categories">
                <router-link :to="'/categories/'+key" exact>
                    <div class="s-card card">
                        <div class="thumbnail">
                            <img :src="cat.catThumbnail" alt="">
                        </div>
                        <div class="title">{{cat.name}}</div>
                    </div>
                </router-link>
            </div>
        </div>
        <div v-else-if="subCategories">
            <div class="s-page-title">
                Категория: {{currentCat}}
            </div>
            <div class="columns is-multiline">
                <div class="column is-4" v-for="(subCat) in subCategories.subCategories">
                    <router-link :to="'/categories/'+currentCat+'/'+subCat.key" exact>
                        <div class="s-card card">
                            <div class="thumbnail">
                                <img :src="subCat.catThumbnail" alt="">
                            </div>
                            <div class="title">{{subCat.name}}</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import Breadcrumbs from './breadcrumbs/Breadcrumbs'
    import Category from './categories/Category'
    export default {
        data() {
            return {
                currentCat: ''
            }
        },
        components: {
            Breadcrumbs,
            Category
        },
        methods: {
            ...mapActions(['getCategories']),
        },
        computed: {
            ...mapGetters(['categories', 'path']),
            subCategories: function () {
                return this.categories[this.currentCat];
            },
            isSubCategory: function () {
                return (this.$route.params.category) ? true : false
            }
        },
        watch: {
            '$route.params.category': function () {
                this.currentCat = this.$route.params.category;
            }
        },
        mounted() {
            this.getCategories();
            this.currentCat = this.$route.params.category;
        }
    }
</script>