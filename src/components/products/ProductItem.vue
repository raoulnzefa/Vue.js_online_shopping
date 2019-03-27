<template>
    <div class="column is-4">
            <div class="s-card card">
                <router-link :to="'/categories/'+category+'/'+subCategory+'/'+ product.id" class="thumbnail">
                    <img :src="product.thumbnailUrl" alt="Placeholder image">
                </router-link>
                <div class="card-content">
                    <div class="media">
                        <router-link class="title" :to="'/categories/'+category+'/'+subCategory+'/'+ product.id">{{product.title}}</router-link>
                    </div>
                    <div class="content">{{product.description}}</div>
                    <div class="s-price">
                        <strong>{{product.price}} грн.</strong>
                    </div>
                    <a class="button is-primary" href="javascript:;" @click="addToCheckout({product, category, subCategory})">В корзину</a>
                </div>
            </div>
        </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        props: ['product', 'category', 'subCategory'],
        methods: {
            ...mapActions(['addToCheckout'])
        }
    }
</script>