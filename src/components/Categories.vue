<template>
    <div>
        <div class="columns is-multiline" v-if="!isSubCategory">
            <div class="column is-4" v-for="(cat, key) in categories">
                <router-link :to="'/categories/'+key" exact>
                    <div class="card">
                        <div class="thumbnail">
                            <img :src="cat.catThumbnail" alt="">
                        </div>
                        <h2>{{cat.name}}</h2>
                    </div>
                </router-link>
            </div>
        </div>
       <div class="columns is-multiline" v-else-if="subCategories">
           <div class="column is-4" v-for="(subCat, index) in subCategories.subCategories">
               <router-link :to="'/categories/'+currentCat+'/'+subCat.key" exact>
                    <div class="card">
                   <div class="thumbnail">
                       <img :src="subCat.catThumbnail" alt="">
                   </div>
                   <h2>{{subCat.name}}</h2>
               </div>
               </router-link>
           </div>
       </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        data() {
            return {
                currentCat: ''
            }
        },
        methods: {
            ...mapActions(['getCategories']),
        },
        computed: {
            ...mapGetters(['categories']),
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

    .card {
        padding-top: 25px;
        padding-bottom: 25px;
    }
</style>