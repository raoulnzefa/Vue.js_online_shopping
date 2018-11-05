<template>
    <div>
        <breadcrumbs :path="path"></breadcrumbs>
        <div class="columns is-multiline" v-if="!isSubCategory">
            <category v-for="(category, key) in categories" :key="key" :category="category" :route="'/categories/'+key"></category>
        </div>
        <div v-else-if="subCategories">
            <div class="s-page-title">Категория: {{currentCat}}</div>
            <div class="columns is-multiline">
                <category v-for="subCat in subCategories.subCategories" :key="subCat.key" :category="subCat" :route="'/categories/'+currentCat+'/'+subCat.key"></category>
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
