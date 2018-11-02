<template>
    <div id="app">
        <store-header></store-header>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import {mapActions} from 'vuex'

    export default {
        name: 'app',
        components: {
            StoreHeader: Header
        },
        methods: {
            ...mapActions(['firebaseAuthWatcher'])
        },
        created() {
            this.firebaseAuthWatcher();
        }
    }
</script>

<style lang="scss">
    @import './assets/scss/main.scss';
</style>
