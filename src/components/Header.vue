<template>
    <header>
        <div class="container">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <router-link :to="'/'">
                        <span class="navbar-item">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                        </span>
                    </router-link>
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons" v-if="!isUser">
                                <router-link :to="'/login'" class="button is-light">Логин</router-link>
                                <router-link :to="'/register'" class="button is-primary">
                                    <strong>Регистрация</strong>
                                </router-link>
                            </div>
                            <div class="buttons" v-else>
                                <router-link :to="'/user'" class="button is-light">{{currentUser.userName}}</router-link>
                                <a class="button is-primary" href="javascript:;" @click="logout">Выйти</a>
                            </div>
                        </div>
                        <div class="navbar-item">
                            <router-link :to="'/cart'" class="button is-light">
                                <strong>Мой заказ</strong>
                            </router-link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters(['isUser', 'currentUser'])
        },
        methods: {
            ...mapActions(['logout'])
        },
    }
</script>

<style scoped lange="sass">
    .navbar-btn a {
        color: white;
    }

    .li-pointer {
        cursor: pointer;
    }

    .li-pointer:hover {
        cursor: pointer;
    }
</style>