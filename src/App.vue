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
    import {mapActions, mapGetters} from 'vuex'

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

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    
    .label {
        text-align: left;
    }

    .spinner-bg {
        margin-top: 150px;
    }
</style>
