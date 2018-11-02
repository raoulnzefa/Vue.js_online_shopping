<template>
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <li v-for="item in path"><router-link :to="item.link"><span>{{item.title}}</span></router-link></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: ['path']
    }
</script>

<style scoped>

</style>