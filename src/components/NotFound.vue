<template>
    <div>
        <img src="http://skypromotion.ru/uploads/posts/2017-01/1484589410_error-404.png" alt="">
        <div class="text">{{msg}}</div>
    </div>
</template>

<script>
    export default {
        props: ['msg'],
    }
</script>

<style scoped>
    img {
        max-width: 300px !important;
    }
    .text {
        font-size: 25px;
        font-weight: bold;
        text-transform: uppercase;
        margin-top: 20px;
    }
</style>