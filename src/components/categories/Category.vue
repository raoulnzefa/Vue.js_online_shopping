<template>
    <div class="column is-4">
        <router-link :to="route" exact>
            <div class="s-card card">
                <div class="thumbnail">
                    <img :src="category.catThumbnail" alt="">
                </div>
                <div class="title">{{category.name}}</div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: ['category', 'route']
    }
</script>

<style scoped>

</style>