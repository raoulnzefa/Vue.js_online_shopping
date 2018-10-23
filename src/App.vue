<template>
    <div id="app">
        <store-header></store-header>
        <messages></messages>
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
    import Messages from './components/messages/Messages.vue'
    import {mapActions, mapGetters} from 'vuex'
    export default {
        name: 'app',
        components: {
            StoreHeader: Header,
            Messages
        },
        methods: {
            ...mapActions(['firebaseAuthWatcher'])
        },
        created() {
            this.firebaseAuthWatcher();
        }
    }

</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .container {
        margin-top: 40px !important;
    }
</style>
