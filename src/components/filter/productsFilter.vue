<template>
    <div class="has-text-left">
        <b-dropdown>
            <button class="button is-primary" slot="trigger">
                <span>Категория</span>
            </button>
            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-item>Something else</b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
    export default {
        props: {
            products: {
                type: Object
            },
        },
    }
</script>

<style scoped>
    .dropdown-item {
        text-align: left;
    }
</style>