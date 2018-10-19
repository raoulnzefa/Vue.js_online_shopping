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
                        <p class="title is-4">{{item.title}}</p>
                    </div>
                </div>
                <strong class="price">{{item.price}} грн.</strong>
                <div class="content">{{item.description}}</div>
                <a class="button is-primary" href="javascript:;" @click="addItem">В корзину</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item'],
        methods: {
            addItem() {

            }
        },
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