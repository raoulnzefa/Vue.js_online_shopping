<template>
    <div class="column is-4">
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img :src="item.thumbnail_url" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <router-link :to="'/product/' + item.id"><span>{{item.title}}</span></router-link>
                    </div>
                </div>
                <strong class="price">{{item.price}} грн.</strong>
                <div class="content">{{item.description}}</div>
                <a class="button is-primary" href="javascript:;" @click="addToCheckout(item)">В корзину</a>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        props: ['item'],
        methods: {
            ...mapActions(['addToCheckout'])
        }
    }
</script>

<style scoped>
    .title {
        font-size: 18px !important;
    }

    .price {
        display: block;
        text-align: left;
        font-size: 18px;
    }
    
    .content {
        text-align: left;
        margin-top: 4px;
    }
</style>